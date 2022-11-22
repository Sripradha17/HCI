const express = require('express');
const router = express.Router();
const data = require('../data');
const bcrypt = require('bcrypt');
const xss = require('xss')
const userData = data.users;
const sportsData = data.sports;
const reviewData = data.reviews;
const validation = require('../data/validation');

router.get('/', async (req, res) => {
    const sports = await sportsData.getAllSportss();
    sports.forEach(async (sports) => {
        sports.showRating = sports.rating > 0 ? true : false;
        sports.ratingclass = sports.rating >= 3.5 ? "success" : sports.rating > 2 ? "warning" : "danger";
        sports.showEdit = req.session.user ? sports.addedBy == req.session.user._id ? true : false : false
    });

    return res.render('templates/sports/sports', {
        authenticated: req.session.user ? true : false,
        user: req.session.user,
        title: 'Sports',
        sports: sports
    });

});

module.exports = router;