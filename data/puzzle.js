const mongoCollections = require('../config/mongoCollections');
const puzzleGame = mongoCollections.puzzle;
const validation = require('../data/validation');
const bcrypt = require('bcrypt');
const saltRounds = 16;
let { ObjectId } = require('mongodb');
const { response } = require('express');

async function getAllPuzzles() {
    const puzzleCollection = await puzzleGame();
    const allPuzzle = await puzzleCollection.find({}).toArray();
    for (let x of allPuzzle) {
        x._id = x._id.toString();
        if (x.images.length < 1) {
            x.image = "no-puzzle-image.png";
        }
        else {
            x.image = x.images[0];
        }
        x.partAbout = x.about.substr(0,60)

    }

    return allPuzzle;
}

async function getPuzzleById(puzzleId) {

    const puzzleCollection = await puzzleGame();
    let puzzleOne = await puzzleCollection.findOne({ _id: ObjectId(puzzleId.trim()) });
    if (puzzleOne === null) {
        throw "No puzzle game with Id found"
    }

    if (puzzleOne.images.length < 1) {
        puzzleOne.image = "no-puzzle-image.png";
    }
    else {
        puzzleOne.imageOne = puzzleOne.images[1];
        puzzleOne.imageTwo = puzzleOne.images[2];
        puzzleOne.imageThree = puzzleOne.images[3];
        puzzleOne.imageFour = puzzleOne.images[4];
    }

    puzzleOne.cheatCodesSet = []
    for (let j = 0; j < 5; j++) {
        if (puzzleOne.cheatCodes[j]) {
            puzzleOne.cheatCodesSet.push(puzzleOne.cheatCodes[j])
        }else{
            break;
        }
    }

    puzzleOne.urlNameOne = puzzleOne.url[0];
    puzzleOne.urlOne = puzzleOne.url[1]
    puzzleOne.urlNameTwo = puzzleOne.url[2];
    puzzleOne.urlTwo = puzzleOne.url[3]
    puzzleOne.urlNameThree = puzzleOne.url[4];
    puzzleOne.urlThree = puzzleOne.url[5]
    puzzleOne.urlNameFour = puzzleOne.url[6];
    puzzleOne.urlFour = puzzleOne.url[7]
    puzzleOne.urlNameFive = puzzleOne.url[8];
    puzzleOne.urlFive = puzzleOne.url[9]
    puzzleOne.urlNameSix = puzzleOne.url[10];
    puzzleOne.urlSix = puzzleOne.url[11]
    puzzleOne.urlNameSeven = puzzleOne.url[12];
    puzzleOne.urlSeven = puzzleOne.url[13]
    puzzleOne.urlNameEight = puzzleOne.url[14];
    puzzleOne.urlEight = puzzleOne.url[15]

    return puzzleOne

}

async function addPuzzle(name, about, instruction, refer, cheatCodes, url, images, link) {
    await validation.checkname(name);
    await validation.checkInfo(about);
    await validation.checkInstruction(instruction);
    await validation.checkCheatCode(cheatCodes);
    await validation.checkUrlList(url);
    await validation.checkUrl(refer);
    await validation.checkUrl(link);
    await validation.checkimage(images);
    const puzzleCollection = await puzzleGame();
    let newPuzzle = {
        name: name,
        about: about,
        instruction: instruction,
        cheatCodes: cheatCodes,
        url: url,
        refer: refer,
        link: link,
        images: images,
        reviews: [],
        rating: 0
    }
    const insertInfo = await puzzleCollection.insertOne(newPuzzle);
    if (insertInfo.insertedCount === 0) throw "could not add puzzle";
    return true;
}

async function addReviewIds(gid, reviewId, avg) {
    let puzzle = (await this.getPuzzleById(gid));
    if (puzzle === null) throw 'No user found with that id.';
    let addReview = {
        reviewId
    };
    let updatePuzzle = {
        rating: avg
    };

    const puzzleCollection = await puzzleGame();
    const updatedReview = await puzzleCollection.updateOne({ _id: ObjectId(gid) },
        { $push: { reviews: addReview } });

    if (updatedReview.modifiedCount === 0) throw 'Could not added review.';
    const updatedInfo = await puzzleCollection.updateOne({ _id: ObjectId(gid) },
        { $set: updatePuzzle });
    if (updatedInfo.modifiedCount === 0) throw 'Could not added review.';
    return true;
}

async function removeReviewIds(gid, reviewId, avg) {
    let puzzle = (await this.getPuzzleById(gid));
    if (puzzle === null) throw 'No user found with that id.';
    let addReview = {
        reviewId
    };
    let updatePuzzle = {
        rating: avg
    };
    const puzzleCollection = await puzzleGame();
    const updatedReview = await puzzleCollection.updateOne({ _id: ObjectId(gid) },
        { $pull: { reviews: addReview } });

    const updatedInfo = await puzzleCollection.updateOne({ _id: ObjectId(gid) },
        { $set: updatePuzzle });
    return true;
}

module.exports = {
    getAllPuzzles,
    getPuzzleById,
    addPuzzle,
    addReviewIds,
    removeReviewIds
}