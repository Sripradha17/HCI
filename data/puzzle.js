const mongoCollections = require('../config/mongoCollections');
const puzzle = mongoCollections.puzzle;
const validation = require('../data/validation');
const bcrypt = require('bcrypt');
const saltRounds = 16;
let { ObjectId } = require('mongodb');
const { response } = require('express');

async function getAllPuzzles() {
    const puzzleCollection = await puzzle();
    const allPuzzle = await puzzleCollection.find({}).toArray();
    for (let x of allPuzzle) {
        x._id = x._id.toString();
        console.log(x)
        if (x.images.length < 1) {
            x.image = "no-puzzle-image.png";
        }
        else {
            x.image = x.images[0];
        }
    }

    return allPuzzle;
}

async function getPuzzleById(puzzleId) {
    //validation remaining

    const puzzleCollection = await puzzle();
    let puzzle = await puzzleCollection.findOne({ _id: ObjectId(puzzleId.trim()) });
    if (puzzle === null) throw 'No puzzle with that id.';
    puzzle._id = puzzle._id.toString();
    if (puzzle.images.length < 1) {
        puzzle.images.push("no-puzzle-image.png");
    }
    return puzzle;
}

async function addPuzzle(name, info, cheatCodes, url, images) {
    await validation.checkname(name);
    await validation.checkInfo(info);
    await validation.checkCheatCode(cheatCodes);
    await validation.checkUrl(url);
    await validation.checkimage(images);
    const puzzleCollection = await puzzle();
    let newPuzzle = {
        name: name,
        info:info,
        cheatCodes:cheatCodes,
        url:url,
        images:images,
        rating: 0
    }
    const insertInfo = await puzzleCollection.insertOne(newPuzzle);
    if (insertInfo.insertedCount === 0) throw "could not add puzzle";
    return true;
}

module.exports = {
    getAllPuzzles,
    getPuzzleById,
    addPuzzle
}