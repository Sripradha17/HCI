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
    let search =""
    const puzzle = await puzzleData.getAllPuzzles(search);
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

router.post('/', async (req, res) => {
    let search =""
    if (req.body.search != undefined) {
        console.log(req.body.search)
        search = xss(req.body.search.trim());
    }
    console.log(search)
    const puzzle = await puzzleData.getAllPuzzles(search);
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
    if (id === '') {
        return res.render('errors/404', {
            authenticated: req.session.user ? true : false,
            user: req.session.user,
            title: '404 Page not found',
        });

    }
    try {
        let puzzle = await puzzleData.getPuzzleById(id);
        puzzle.showRating = puzzle.rating > 0 ? true : false;
        puzzle.reviews_list = await reviewData.getAllReviewsBygameId(puzzle._id.toString());
        if (puzzle) {
            // puzzle.showRating = puzzle.rating > 0 ? true : false;
            // puzzle.reviews_list = await reviewData.getAllReviewsByPuzzleId(puzzle._id);

            return res.render('templates/puzzle/puzzleDetail', {
                authenticated: req.session.user ? true : false,
                user: req.session.user,
                title: 'Puzzle',
                puzzle: puzzle,
                partial: 'puzzle-detail-script'
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

router.get('/puzzlereviews/:id', async (req, res) => {
    let id = xss(req.params.id.trim());
    let puzzle = undefined;
    if (id === '') {
        return res.render('templates/partials/review_list', {
            layout: null,
            ...puzzle
        });

    }
    try {
        puzzle = await puzzleData.getPuzzleById(id);
        if (puzzle) {
            puzzle.showRating = puzzle.rating > 0 ? true : false;
            puzzle.reviews_list = await reviewData.getAllReviewsBygameId(puzzle._id.toString());
            //let review = await puzzleData.getAllReviewsByPuzzleId(puzzle._id);
            return res.render('templates/partials/review_list', {
                layout: null,
                ...puzzle
            });
        }
        else {
            return res.render('templates/partials/review_list', {
                layout: null,
                ...puzzle
            });

        }
    }
    catch (e) {
        return res.render('templates/partials/review_list', {
            layout: null,
            ...puzzle
        });
    }

});

module.exports = router;