const express = require('express');
const router = express.Router();
const data = require('../data');
const bcrypt = require('bcrypt');
const xss = require('xss')
const userData = data.users;
const puzzleData = data.puzzle;
const reviewData = data.reviews;
const validation = require('../data/validation');

router.get('/', async (req, res) => {
    const puzzle = await puzzleData.getAllPuzzles();
    puzzle.forEach(async (puzzle) => {
        puzzle.showRating = puzzle.rating > 0 ? true : false;
        puzzle.ratingclass = puzzle.rating >= 3.5 ? "success" : puzzle.rating > 2 ? "warning" : "danger";
        puzzle.showEdit = req.session.user ? puzzle.addedBy == req.session.user._id ? true : false : false
    });

    return res.render('templates/puzzle/puzzle', {
        authenticated: req.session.user ? true : false,
        user: req.session.user,
        title: 'Puzzle',
        puzzle: puzzle
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
        let puzzle = await puzzleData.getPuzzleById(id);
        console.log(puzzle)
        if (puzzle) {
            // puzzle.showRating = puzzle.rating > 0 ? true : false;
            // puzzle.reviews_list = await reviewData.getAllReviewsByPuzzleId(puzzle._id);
            
            return res.render('templates/puzzle/puzzleDetail', {
                authenticated: req.session.user ? true : false,
                user: req.session.user,
                title: 'Puzzle',
                puzzle: puzzle,

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