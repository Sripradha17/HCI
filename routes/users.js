const express = require('express');
const router = express.Router();
const data = require('../data');
const bcrypt = require('bcrypt');
const xss = require('xss')
const userData = data.users;
const hotelData = data.hotels;
const reviewData = data.reviews;
const validation = require('../data/validation');
const { parse } = require('handlebars');


router.get('/', async (req, res) => {
    let hotels = await hotelData.getAllActiveHotels();
    hotels = hotels.slice(0, 3);
    hotels.forEach(async (hotel) => {
        hotel.showRating = hotel.rating > 0 ? true : false;
        hotel.ratingclass = hotel.rating >= 3.5 ? "success" : hotel.rating > 2 ? "warning" : "danger";
    });
    res.render('templates/users/index',
        {
            title: 'My Trip Advisor',
            authenticated: req.session.user ? true : false,
            user: req.session.user,
            hotels: hotels
        });
});

// Get login page
router.get('/login', async (req, res) => {
    if (req.session.user) {
        res.redirect('/hotels');
    } else {
        res.render('templates/users/login', {
            title: 'Log In',
            authenticated: false,
            partial: 'login-script'
        });
    }
});

// Post login
router.post('/login', async (req, res) => {

    const username = xss(req.body.username.trim());
    const password = xss(req.body.password.trim());
    let data = {};
    if (username.trim() === "" || password.trim() === "") {
        data.success = false;
        data.msg = "Please enter login detail!";
        return res.json(data);
    }
    try {
        await validation.checkUserName(username);
    } catch (error) {
        data.success = false;
        data.msg = error;
        return res.json(data);
    }
    // try {
    //     await validation.checkPassword(password);
    // } catch (error) {
    //     data.success = false;
    //     data.msg = error;
    //     return res.json(data);
    // }
    try {
        let responseData = await userData.checkUser(username, password);
        if (responseData.authenticated) {
            req.session.user = responseData.user;
            data.success = true;
            data.msg = "successfully logged in";
            return res.json(data);
        }
        else {
            data.success = false;
            data.msg = "username or password is incorrect";
            return res.json(data);
        }
    } catch (error) {
        data.success = false;
        data.msg = error;
        return res.json(data);
    }

});

//Post login
router.get("/Signup", async (req, res) => {
    if (!req.session.user) {
        return res.render('templates/users/Signup', {
            layout: 'main',
            title: "User Signup",
            partial: 'Signup-script'
        });

    } else {
        return res.redirect('/hotels');
    }
});

router.post("/Signup", async (req, res) => {
    const firstname = xss(req.body.firstname.trim());
    const lastname = xss(req.body.lastname.trim());
    const phoneNumber = xss(req.body.phoneNumber.trim());
    const email = xss(req.body.email.trim());
    const role = xss(req.body.role.trim());
    const username = xss(req.body.username.trim());
    const age = xss(req.body.age.trim());
    const password = xss(req.body.password.trim());
    let data = {};

    if (!validation.validString(firstname)) {
        data.success = false;
        data.msg = "First name not valid string";
        return res.json(data);
    }
    if (!validation.validString(lastname)) {
        data.success = false;
        data.msg = "last name not valid string";
        return res.json(data);
    }
    try {
        await validation.checkphoneNumber(phoneNumber);
    } catch (error) {
        data.success = false;
        data.msg = error;
        return res.json(data);
    }
    try {
        await validation.checkemail(email);
    } catch (error) {
        data.success = false;
        data.msg = error;
        return res.json(data);
    }
    try {
        await validation.checkage(age);
    } catch (error) {
        data.success = false;
        data.msg = error;
        return res.json(data);
    }
    try {
        await validation.checkUserName(username);
    } catch (error) {
        data.success = false;
        data.msg = error;
        return res.json(data);
    }
    try {
        await validation.checkPassword(password);
    } catch (error) {
        data.success = false;
        data.msg = error;
        return res.json(data);
    }

    let status = 2;
    if (role == 2 || role == 3) {
        if (role == 2) {
            status = 1;
        }
    }
    else {
        throw "Something going wrong";
    }

    try {
        let { userInserted } = await userData.createUser(firstname, lastname, phoneNumber, email, role, status, username, age, password);
        //console.log("reached router");
        if (userInserted) {
            data.success = true;
            data.msg = "successfully Registered";
            return res.json(data);

        }
    } catch (e) {
        data.success = false;
        data.msg = e;
        return res.json(data);
    }

});



router.get("/profile", async (req, res) => {
    if (!req.session.user) {

        return res.redirect("/login");
    }
    let user = await userData.getUserById(req.session.user._id);
    if (user === null) {
        return res.render('error/404');
    }
    let error_message = req.session.error_message;
    let success_message = req.session.success_message;
    delete req.session.success_message;
    delete req.session.error_message;
    return res.render('templates/users/Profile', {
        layout: 'main',
        title: "My Profile",
        partial: 'profile-script',
        user: user,
        error_message: error_message,
        success_message: success_message
    });
});

router.post("/profile", async (req, res) => {
    const firstname = xss(req.body.firstname.trim());
    const lastname = xss(req.body.lastname.trim());
    const phoneNumber = xss(req.body.phoneNumber.trim());
    const email = xss(req.body.email.trim());
    const age = xss(req.body.age.trim());
    let data = {};
    if (!validation.validString(firstname)) {
        data.success = false;
        data.msg = "First name not valid string";
        return res.json(data);
    }
    if (!validation.validString(lastname)) {
        data.success = false;
        data.msg = "last name not valid string";
        return res.json(data);
    }
    try {
        await validation.checkphoneNumber(phoneNumber);
    } catch (error) {
        data.success = false;
        data.msg = error;
        return res.json(data);
    }
    try {
        await validation.checkemail(email);
    } catch (error) {
        data.success = false;
        data.msg = error;
        return res.json(data);
    }
    try {
        await validation.checkage(age);
    } catch (error) {
        data.success = false;
        data.msg = error;
        return res.json(data);
    }

    if (!req.session.user) {
        data.success = false;
        data.msg = "Please login your account.";
        return res.json(data);

    }
    try {

        let  userUpdated  = await userData.UpdateProfile(req.session.user._id, firstname, lastname, phoneNumber, email, age);
        if (userUpdated) {
            data.success = true;
            data.msg = "Successfully updated your Profile";
            return res.json(data);
        }
    } catch (e) {
        data.success = false;
        data.msg = e;
        return res.json(data);
    }

});
router.get("/myReview", async (req, res) => {
    if (!req.session.user) {
        return res.redirect("/login");
    }
    let user = await userData.getUserById(req.session.user._id);
    if (user === null) {
        return res.render('error/404');
    }
    let reviews = await reviewData.getReviewByUserId(req.session.user._id);
    return res.render('templates/users/myReview', {
        layout: 'main',
        title: "My Reviews",
        partial: 'my-review-script',
        reviews: reviews,
        authenticated: req.session.user ? true : false,
        user: req.session.user
    });
});
router.get("/favHotel", async (req, res) => {
    if (!req.session.user) {
        return res.redirect("/login");
    }
    let user = await userData.getUserById(req.session.user._id);
    if (user === null) {
        return res.render('error/404');
    }
    let hotels = await hotelData.getAllActiveHotels();
    hotels = hotels.filter(d => user.favoriteHotels.includes(d._id));
    return res.render('templates/users/myFavHotel', {
        layout: 'main',
        title: "My Reviews",
        partial: 'my-review-script',
        hotels: hotels,
        authenticated: req.session.user ? true : false,
        user: req.session.user
    });
});

router.get("/logout", async (req, res) => {
    if (!req.session.user) {
        return res.render('errors/404');
    }
    delete req.session.user;
    return res.redirect("/");

});
module.exports = router;
