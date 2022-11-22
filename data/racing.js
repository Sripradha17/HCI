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
        console.log(x)
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
    //validation remaining

    const racingCollection = await racing();
    let racing = await racingCollection.findOne({ _id: ObjectId(racingId.trim()) });
    if (racing === null) throw 'No racing with that id.';
    racing._id = racing._id.toString();
    if (racing.images.length < 1) {
        racing.images.push("no-racing-image.png");
    }
    return racing;
}

async function addRacing(name, info, cheatCodes, url, images) {
    await validation.checkname(name);
    await validation.checkInfo(info);
    await validation.checkCheatCode(cheatCodes);
    await validation.checkUrl(url);
    await validation.checkimage(images);
    const racingCollection = await racing();
    let newRacing = {
        name: name,
        info:info,
        cheatCodes:cheatCodes,
        url:url,
        images:images,
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