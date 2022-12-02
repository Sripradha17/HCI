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

router.get('/:id', async (req, res) => {
    let id = xss(req.params.id.trim());
    console.log(id)
    if (id === '') {
        return res.render('errors/404', {
            authenticated: req.session.user ? true : false,
            user: req.session.user,
            title: '404 Page not found',
        });

    }
    try {
        let racing = await racingData.getRacingById(id);
        console.log(racing)
        if (racing) {            
            return res.render('templates/racing/racingDetail', {
                authenticated: req.session.user ? true : false,
                user: req.session.user,
                title: 'Racing',
                racing: racing,

            });
        }
        else {
            return res.render('errors/404', {
                authenticated: req.session.user ? true : false,
                user: req.session.user,
                title: '404 Page not found',
            });
        }
    }
    catch (e) {
        return res.render('errors/404', {
            authenticated: req.session.user ? true : false,
            user: req.session.user,
            title: '404 Page not found',
        });
    }

});

module.exports = router;