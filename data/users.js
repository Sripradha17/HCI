const mongoCollections = require('../config/mongoCollections');
const users = mongoCollections.users;
const bcrypt = require('bcrypt');
const validation = require('../data/validation');
const saltRounds = 16;
let { ObjectId } = require('mongodb');
const { parse } = require('handlebars');

async function getAllUsers() {
    const userCollection = await users();
    const allUsers = await userCollection.find({}).toArray();
    for (let x of allUsers) {
        x._id = x._id.toString();
    }

    return allUsers;
}

async function getUserById(userId) {
    //validation remaining

    const userCollection = await users();
    let user = await userCollection.findOne({ _id: ObjectId(userId.trim()) });
    if (user === null) throw 'No user with that id.';
    user._id = user._id.toString();

    return user;
}

async function checkUser(username, password) {
    try {
        username = username.toLowerCase().trim();
        password = password.trim();
        await validation.checkUserName(username);
        //await validation.checkPassword(password)
        const user = await findUserByUsername(username);
        if (user == null) {
            throw "username or password is incorrect";
        }
        let hashedPassword = user.hashedPassword;
        if (user && await bcrypt.compare(password, hashedPassword)) {
            return { authenticated: true, user: user };
        }
        else {
            throw "username or password is incorrect";
        }
    } catch (error) {
        throw error;
    }
}

async function findUserByUsername(username) {
    try {

        const userCollection = await users();
        const usersList = await userCollection.find({}).toArray();
        const lowerName = username.toLowerCase();
        let user = undefined;
        for (let item of usersList) {
            let tempUserName = item.userName;
            let temp = tempUserName.toLowerCase();
            if (temp === lowerName) {
                user=item;
            }
        }
        if (!user) {
            return undefined;
        }
        return user;
    } catch (error) {
        throw `${error}`;
    }
}

async function checkUserName(username) {
    if (username.trim() === "") {
        return false;
    }
    let temp = username;
    if (temp.split(" ").length > 1) {
        return false;
    }
    if (username.length < 4) {
        return false;
    }
    if (!username.match(/^[0-9a-zA-z]+$/)) {
        return false;
    }
    return true;
}

async function checkPassword(password) {
    if (password.trim() === "") {
        return false;
    }
    let temp = password;
    if (temp.split(" ").length > 1) {
        return false;
    }
    if (password.length < 6) {
        return false;
    }
    return true;
}

async function createUser(firstname, lastname, email, username, password) {
    if (!validation.validString(firstname)) {

        throw "First name not valid string";

    }
    if (!validation.validString(lastname)) {
        throw "Last Name not valid string";
    }

    try {
        await validation.checkemail(email);
    } catch (error) {
        throw error;
    }
    try {
        await validation.checkUserName(username);
    } catch (error) {
        throw error;
    }
    try {
        await validation.checkPassword(password);
    } catch (error) {
        throw error;
    }
   
    // check duplicated
    const allUsers = await users();
    const usersList = await allUsers.find({}).toArray();
    const lowerName = username.toLowerCase();
    for (let item of usersList) {
        let tempUserName = item.userName;
        let temp = tempUserName.toLowerCase();
        if (temp === lowerName) {
            throw "User Already Registered";
        }
    }

    const hash = await bcrypt.hash(password, saltRounds);
    let newUser = {
        firstName: firstname,
        lastName: lastname,
        userName: username,
        emailId: email,
        hashedPassword: hash,
        reviews: []
    }

    const addRes = await allUsers.insertOne(newUser);
    if (addRes.insertedCount === 0) {
        throw `can not add a new user`;
    }
    return { userInserted: true };
}

async function UpdateProfile(userId, firstname, lastname, email) {
    if (!validation.validString(firstname)) {
        data.success = false;
        data.msg = "First name not valid string";
        return res.json(data);
    }
    if (!validation.validString(lastname)) {
        data.success = false;
        data.msg = "Last Name not valid string";
        return res.json(data);
    }
    await validation.checkemail(email);

    try {
        let user = (await this.getUserById(userId));
        if (user === null) throw 'No user found with that id.';

        let updateUser = {
            firstName: firstname,
            lastName: lastname,
            emailId: email
        }

        const userCollection = await users();
        const updatedInfo = await userCollection.updateOne({ _id: ObjectId(userId) }, { $set: updateUser });
        if (updatedInfo.modifiedCount === 0) throw 'Could not  update your profile.';
        return true;
    } catch (error) {
        throw error;
    }


}
module.exports = {
    getAllUsers,
    getUserById,
    checkUserName,
    checkPassword,
    createUser,
    checkUser,
    UpdateProfile
}