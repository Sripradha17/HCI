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

    const puzzleCollection = await puzzle();
    let puzzleOne = await puzzleCollection.findOne({ _id: ObjectId(puzzleId.trim()) });
    if (puzzleOne === null) {
        throw "No puzzle game with Id found"
    }
    // console.log(x)
    if (puzzleOne.images.length < 1) {
        puzzleOne.image = "no-puzzle-image.png";
    }
    else {
        puzzleOne.imageOne = puzzleOne.images[0];
        puzzleOne.imageTwo = puzzleOne.images[1];
        puzzleOne.imageThree = puzzleOne.images[2];
        puzzleOne.imageFour = puzzleOne.images[3];
        puzzleOne.imageFive = puzzleOne.images[4];
    }

    puzzleOne.instructionSet=[];
    puzzleOne.cheatCodesSet=[]
    for (let i = 0; i < 5; i++) {
        puzzleOne.instructionSet.push(puzzleOne.instruction[i])
    }

    for (let j = 0; j < 5; j++) {
        puzzleOne.cheatCodesSet.push(puzzleOne.cheatCodes[j])
    }
    
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
    const puzzleCollection = await puzzle();
    let newPuzzle = {
        name: name,
        about: about,
        instruction: instruction,
        cheatCodes: cheatCodes,
        url: url,
        refer: refer,
        link: link,
        images: images,
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