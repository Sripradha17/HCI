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
    const search = xss(req.body.search.trim())
    const racing = await racingData.getAllRacings(search);
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

router.post('/', async (req, res) => {
    let search =""
    if (req.body.search != undefined) {
        console.log(req.body.search)
        search = xss(req.body.search.trim());
    }
    console.log(search)
    const racing = await racingData.getAllRacings(search);
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
    if (id === '') {
        return res.render('errors/404', {
            authenticated: req.session.user ? true : false,
            user: req.session.user,
            title: '404 Page not found',
        });

    }
    try {
        let racing = await racingData.getRacingById(id);
        racing.showRating = racing.rating > 0 ? true : false;
        racing.reviews_list = await reviewData.getAllReviewsBygameId(racing._id.toString());
        if (racing) {
            return res.render('templates/racing/racingDetail', {
                authenticated: req.session.user ? true : false,
                user: req.session.user,
                title: 'Racing',
                racing: racing,
                partial: 'racing-detail-script'
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

router.get('/racingreviews/:id', async (req, res) => {
    let id = xss(req.params.id.trim());
    let racing = undefined;
    if (id === '') {
        return res.render('templates/partials/review_list', {
            layout: null,
            ...racing
        });

    }
    try {
        racing = await racingData.getRacingById(id);
        if (racing) {
            racing.showRating = racing.rating > 0 ? true : false;
            racing.reviews_list = await reviewData.getAllReviewsBygameId(racing._id.toString());
            //let review = await racingData.getAllReviewsByRacingId(racing._id);
            return res.render('templates/partials/review_list', {
                layout: null,
                ...racing
            });
        }
        else {
            return res.render('templates/partials/review_list', {
                layout: null,
                ...racing
            });

        }
    }
    catch (e) {
        return res.render('templates/partials/review_list', {
            layout: null,
            ...racing
        });
    }

});

module.exports = router;