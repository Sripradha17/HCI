const mongoCollections = require('../config/mongoCollections');
const sports = mongoCollections.sports;
const validation = require('../data/validation');
const bcrypt = require('bcrypt');
const saltRounds = 16;
let { ObjectId } = require('mongodb');
const { response } = require('express');

async function getAllSportss() {
    const sportsCollection = await sports();
    const allSports = await sportsCollection.find({}).toArray();
    for (let x of allSports) {
        x._id = x._id.toString();
        console.log(x)
        if (x.images.length < 1) {
            x.image = "no-sports-image.png";
        }
        else {
            x.image = x.images[0];
        }
    }

    return allSports;
}

async function getSportsById(sportsId) {
    //validation remaining

    const sportsCollection = await sports();
    let sports = await sportsCollection.findOne({ _id: ObjectId(sportsId.trim()) });
    if (sports === null) throw 'No sports with that id.';
    sports._id = sports._id.toString();
    if (sports.images.length < 1) {
        sports.images.push("no-sports-image.png");
    }
    return sports;
}

async function addSports(name, info, cheatCodes, url, images) {
    await validation.checkname(name);
    await validation.checkInfo(info);
    await validation.checkCheatCode(cheatCodes);
    await validation.checkUrl(url);
    await validation.checkimage(images);
    const sportsCollection = await sports();
    let newSports = {
        name: name,
        info:info,
        cheatCodes:cheatCodes,
        url:url,
        images:images,
        rating: 0
    }
    const insertInfo = await sportsCollection.insertOne(newSports);
    if (insertInfo.insertedCount === 0) throw "could not add sports";
    return true;
}

module.exports = {
    getAllSportss,
    getSportsById,
    addSports
}