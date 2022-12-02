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
    console.log(id)
    if (id === '') {
        return res.render('errors/404', {
            authenticated: req.session.user ? true : false,
            user: req.session.user,
            title: '404 Page not found',
        });

    }
    try {
        let action = await actionData.getActionById(id);
        console.log(action)
        if (action) {            
            return res.render('templates/action/actionDetail', {
                authenticated: req.session.user ? true : false,
                user: req.session.user,
                title: 'Action',
                action: action,

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