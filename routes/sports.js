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
    const search = xss(req.body.search.trim())
    const sports = await sportsData.getAllSportss(search);
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

router.get('/:id', async (req, res) => {
    let id = xss(req.params.id.trim());
    if (id === '') {
        return res.render('errors/404', {
            authenticated: req.session.user ? true : false,
            user: req.session.user,
            title: '404 Page not found',
        });
    }
    try {
        let sports = await sportsData.getSportsById(id);
        sports.showRating = sports.rating > 0 ? true : false;
        sports.reviews_list = await reviewData.getAllReviewsBygameId(sports._id.toString());
        if (sports) {
            return res.render('templates/sports/sportsDetail', {
                authenticated: req.session.user ? true : false,
                user: req.session.user,
                title: 'Sports',
                sports: sports,
                partial: 'sports-detail-script'
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

router.get('/sportsreviews/:id', async (req, res) => {
    let id = xss(req.params.id.trim());
    let sports = undefined;
    if (id === '') {
        return res.render('templates/partials/review_list', {
            layout: null,
            ...sports
        });

    }
    try {
        sports = await sportsData.getSportsById(id);
        if (sports) {
            sports.showRating = sports.rating > 0 ? true : false;
            sports.reviews_list = await reviewData.getAllReviewsBygameId(sports._id.toString());
            //let review = await sportsData.getAllReviewsBySportsId(sports._id);
            return res.render('templates/partials/review_list', {
                layout: null,
                ...sports
            });
        }
        else {
            return res.render('templates/partials/review_list', {
                layout: null,
                ...sports
            });

        }
    }
    catch (e) {
        return res.render('templates/partials/review_list', {
            layout: null,
            ...sports
        });
    }

});

module.exports = router;