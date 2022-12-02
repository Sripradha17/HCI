const mongoCollections = require('../config/mongoCollections');
const racing = mongoCollections.racing;
const validation = require('../data/validation');
const bcrypt = require('bcrypt');
const saltRounds = 16;
let { ObjectId } = require('mongodb');
const { response } = require('express');

async function getAllRacings() {
    const racingCollection = await racing();
    const allRacing = await racingCollection.find({}).toArray();
    for (let x of allRacing) {
        x._id = x._id.toString();
        // console.log(x)
        if (x.images.length < 1) {
            x.image = "no-racing-image.png";
        }
        else {
            x.image = x.images[0];
        }
    }

    return allRacing;
}

async function getRacingById(racingId) {

    const racingCollection = await racing();
    let racingOne = await racingCollection.findOne({ _id: ObjectId(racingId.trim()) });
    if (racingOne === null) {
        throw "No racing game with Id found"
    }
    // console.log(x)
    if (racingOne.images.length < 1) {
        racingOne.image = "no-racing-image.png";
    }
    else {
        racingOne.imageOne = racingOne.images[0];
        racingOne.imageTwo = racingOne.images[1];
        racingOne.imageThree = racingOne.images[2];
        racingOne.imageFour = racingOne.images[3];
        racingOne.imageFive = racingOne.images[4];
    }

    racingOne.instructionSet=[];
    racingOne.cheatCodesSet=[]
    for (let i = 0; i < 5; i++) {
        racingOne.instructionSet.push(racingOne.instruction[i])
    }

    for (let j = 0; j < 5; j++) {
        racingOne.cheatCodesSet.push(racingOne.cheatCodes[j])
    }
    
    return racingOne

}

async function addRacing(name, about, instruction, refer, cheatCodes, url, images, link) {
    await validation.checkname(name);
    await validation.checkInfo(about);
    await validation.checkInstruction(instruction);
    await validation.checkCheatCode(cheatCodes);
    await validation.checkUrlList(url);
    await validation.checkUrl(refer);
    await validation.checkUrl(link);
    await validation.checkimage(images);
    const racingCollection = await racing();
    let newRacing = {
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
    const insertInfo = await racingCollection.insertOne(newRacing);
    if (insertInfo.insertedCount === 0) throw "could not add racing";
    return true;
}

module.exports = {
    getAllRacings,
    getRacingById,
    addRacing
}