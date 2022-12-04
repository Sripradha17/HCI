const { async } = require("seed/lib/seed");

//Validations   
async function validString(str) {
    if (!str || typeof str !== 'string' || !str.trim()) return false;
    return true;
}

// Takes in a single argument.
// Return true if the argument is a boolean; otherwise return false.
async function validBoolean(bool) {
    if (typeof bool !== 'boolean') return false;
    return true;
}



async function checkUserName(username) {
    let usernameregex = /^[a-z0-9_]+$/i;
    if (username === undefined || username === "") {
        throw "username required!";
    }
    if (!usernameregex.test(username)) {
        throw "username not valid!";
    }
    if (username.length < 4) {
        throw "username must be 4 characters!";
    }

}

async function checkPassword(password) {
    var checkspecialChar = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if (password === undefined || password == "") {
        throw "password required!";
    }
    if (!checkspecialChar.test(password) || password.length < 6) {
        throw "password must have special character and 6 character long!"
    }
}

async function checkname(name) {
    if (name === undefined || name == "") {
        throw "name required!";
    }
    if (typeof name !== 'string') {
        throw "name must be a string";
    }
}

async function checkimage(images) {
    if (images.length > 6) {
        throw "Max 6 images are allowed to be uplaoded";
    }
}

async function checkrating(rating) {
    var ratingregx = /^([1-5])$/
    if (!ratingregx.test(rating) || typeof rating !== 'string') {
        throw "rating is not valid";
    }
}

async function checkemail(email) {
    var emailregx = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/
    if (!emailregx.test(email) || typeof email !== 'string') {
        throw "email is not valid";
    }
}

async function checkInfo(info) {
    if (typeof info !== 'string') {
        throw "Enter valid info"
    }
}

async function checkUrl(url) {
    var urlregx = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/
    if (!urlregx.test(url) || typeof url != "string") {
        throw "Enter valid info"
    }
}

async function checkUrlList(url) {

    if (!Array.isArray(url)) {
        throw "Enter valid URL List"
    }
    var urlregx = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/

    for (let i = 1; i < url.length; i++) {
        if (i % 2 == 1) {
            if (url[i].length > 1) {
                if (!urlregx.test(url[i]) || typeof url[i] != "string") {
                    throw "Enter valid url"
                }
            }
        }
    }
}



async function checkCheatCode(cheatCode) {
    if (!Array.isArray(cheatCode)) {
        throw "Enter valid Cheat code"
    }

    cheatCode.forEach(element => {
        if (typeof element != "string") {
            throw "Enter valid Cheat code"
        }
    });
}

async function checkInstruction(instruction) {
    if (!Array.isArray(instruction)) {
        throw "Enter valid Instruction"
    }

    instruction.forEach(element => {
        if (typeof element != "string") {
            throw "Enter valid Instruction"
        }
    });
}

module.exports = {
    validString,
    checkUserName,
    checkPassword,
    checkimage,
    checkrating,
    checkemail,
    checkInfo,
    checkUrl,
    checkUrlList,
    checkCheatCode,
    checkInstruction,
    checkname

};