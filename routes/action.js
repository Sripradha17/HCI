const express = require('express');
const router = express.Router();
const data = require('../data');
const bcrypt = require('bcrypt');
const xss = require('xss')
const userData = data.users;
const actionData = data.action;
const reviewData = data.reviews;
const validation = require('../data/validation');

router.get('/', async (req, res) => {
    const action = await actionData.getAllActions();
    action.forEach(async (action) => {
        action.showRating = action.rating > 0 ? true : false;
        action.ratingclass = action.rating >= 3.5 ? "success" : action.rating > 2 ? "warning" : "danger";
        action.showEdit = req.session.user ? action.addedBy == req.session.user._id ? true : false : false
    });

    return res.render('templates/action/action', {
        authenticated: req.session.user ? true : false,
        user: req.session.user,
        title: 'Action',
        action: action
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
        let action = await actionData.getActionById(id);
        action.showRating = action.rating > 0 ? true : false;
        action.reviews_list = await reviewData.getAllReviewsBygameId(action._id.toString());
        if (action) {
            return res.render('templates/action/actionDetail', {
                authenticated: req.session.user ? true : false,
                user: req.session.user,
                title: 'Action',
                action: action,
                partial: 'action-detail-script'
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

router.get('/actionreviews/:id', async (req, res) => {
    let id = xss(req.params.id.trim());
    let action = undefined;
    if (id === '') {
        return res.render('templates/partials/review_list', {
            layout: null,
            ...action
        });

    }
    try {
        action = await actionData.getActionById(id);
        if (action) {
            action.showRating = action.rating > 0 ? true : false;
            action.reviews_list = await reviewData.getAllReviewsBygameId(action._id.toString());
            //let review = await actionData.getAllReviewsByActionId(action._id);
            return res.render('templates/partials/review_list', {
                layout: null,
                ...action
            });
        }
        else {
            return res.render('templates/partials/review_list', {
                layout: null,
                ...action
            });

        }
    }
    catch (e) {
        return res.render('templates/partials/review_list', {
            layout: null,
            ...action
        });
    }

});

module.exports = router;