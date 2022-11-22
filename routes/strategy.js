const express = require('express');
const router = express.Router();
const data = require('../data');
const bcrypt = require('bcrypt');
const xss = require('xss')
const userData = data.users;
const strategyData = data.strategy;
const reviewData = data.reviews;
const validation = require('../data/validation');

router.get('/', async (req, res) => {
    const strategy = await strategyData.getAllStrategys();
    strategy.forEach(async (strategy) => {
        strategy.showRating = strategy.rating > 0 ? true : false;
        strategy.ratingclass = strategy.rating >= 3.5 ? "success" : strategy.rating > 2 ? "warning" : "danger";
        strategy.showEdit = req.session.user ? strategy.addedBy == req.session.user._id ? true : false : false
    });

    return res.render('templates/strategy/strategy', {
        authenticated: req.session.user ? true : false,
        user: req.session.user,
        title: 'Strategy',
        strategy: strategy
    });

});

module.exports = router;