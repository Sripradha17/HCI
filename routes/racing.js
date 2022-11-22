const express = require('express');
const router = express.Router();
const data = require('../data');
const bcrypt = require('bcrypt');
const xss = require('xss')
const userData = data.users;
const racingData = data.racing;
const reviewData = data.reviews;
const validation = require('../data/validation');

router.get('/', async (req, res) => {
    const racing = await racingData.getAllRacings();
    racing.forEach(async (racing) => {
        racing.showRating = racing.rating > 0 ? true : false;
        racing.ratingclass = racing.rating >= 3.5 ? "success" : racing.rating > 2 ? "warning" : "danger";
        racing.showEdit = req.session.user ? racing.addedBy == req.session.user._id ? true : false : false
    });

    return res.render('templates/racing/racing', {
        authenticated: req.session.user ? true : false,
        user: req.session.user,
        title: 'Racing',
        racing: racing
    });

});

module.exports = router;