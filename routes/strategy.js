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
        let strategy = await strategyData.getStrategyById(id);
        strategy.showRating = strategy.rating > 0 ? true : false;
        strategy.reviews_list = await reviewData.getAllReviewsBygameId(strategy._id.toString());
        if (strategy) {
            // strategy.showRating = strategy.rating > 0 ? true : false;
            // strategy.reviews_list = await reviewData.getAllReviewsByStrategyId(strategy._id);

            return res.render('templates/strategy/strategyDetail', {
                authenticated: req.session.user ? true : false,
                user: req.session.user,
                title: 'Strategy',
                strategy: strategy,
                partial: 'strategy-detail-script'
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

router.get('/strategyreviews/:id', async (req, res) => {
    let id = xss(req.params.id.trim());
    let strategy = undefined;
    if (id === '') {
        return res.render('templates/partials/review_list', {
            layout: null,
            ...strategy
        });

    }
    try {
        strategy = await strategyData.getStrategyById(id);
        if (strategy) {
            strategy.showRating = strategy.rating > 0 ? true : false;
            strategy.reviews_list = await reviewData.getAllReviewsBygameId(strategy._id.toString());
            //let review = await strategyData.getAllReviewsByStrategyId(strategy._id);
            return res.render('templates/partials/review_list', {
                layout: null,
                ...strategy
            });
        }
        else {
            return res.render('templates/partials/review_list', {
                layout: null,
                ...strategy
            });

        }
    }
    catch (e) {
        return res.render('templates/partials/review_list', {
            layout: null,
            ...strategy
        });
    }

});

module.exports = router;