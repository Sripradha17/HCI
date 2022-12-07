const express = require('express');
const router = express.Router();
const data = require('../data');
const bcrypt = require('bcrypt');
const xss = require('xss')
const userData = data.users;
const puzzleData = data.puzzle;
const actionData = data.action;
const racingData = data.racing;
const strategyData = data.strategy;
const sportsData = data.sports;
const reviewData = data.reviews;
const validation = require('../data/validation');
const { parse } = require('handlebars');


router.get('/', async (req, res) => {
    let search=""
    let puzzle = await puzzleData.getAllPuzzles(search);
    let action = await actionData.getAllActions(search);
    let racing = await racingData.getAllRacings(search);
    let sports = await sportsData.getAllSportss(search);
    let strategy = await strategyData.getAllStrategys(search);

    res.render('templates/users/index',
        {
            title: 'Game Over',
            authenticated: req.session.user ? true : false,
            user: req.session.user,
            puzzle: puzzle,
            action: action,
            racing: racing,
            sports: sports,
            strategy: strategy
        });
});

// Get login page
router.get('/login', async (req, res) => {
    if (req.session.user) {
        res.redirect('/');
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
        return res.redirect('/');
    }
});

router.post("/Signup", async (req, res) => {
    const firstname = xss(req.body.firstname.trim());
    const lastname = xss(req.body.lastname.trim());
    const email = xss(req.body.email.trim());
    const username = xss(req.body.username.trim());
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
        await validation.checkemail(email);
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


    try {
        let { userInserted } = await userData.createUser(firstname, lastname, email, username, password);
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
    const email = xss(req.body.email.trim());
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
        await validation.checkemail(email);
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

        let userUpdated = await userData.UpdateProfile(req.session.user._id, firstname, lastname, email);
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


router.get("/logout", async (req, res) => {
    if (!req.session.user) {
        return res.render('errors/404');
    }
    delete req.session.user;
    return res.redirect("/");

});

module.exports = router;
