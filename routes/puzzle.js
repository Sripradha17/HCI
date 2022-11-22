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

module.exports = router;