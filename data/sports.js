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
        // console.log(x)
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

    const sportsCollection = await sports();
    let sportsOne = await sportsCollection.findOne({ _id: ObjectId(sportsId.trim()) });
    if (sportsOne === null) {
        throw "No sports game with Id found"
    }
    // console.log(x)
    if (sportsOne.images.length < 1) {
        sportsOne.image = "no-sports-image.png";
    }
    else {
        sportsOne.imageOne = sportsOne.images[0];
        sportsOne.imageTwo = sportsOne.images[1];
        sportsOne.imageThree = sportsOne.images[2];
        sportsOne.imageFour = sportsOne.images[3];
        sportsOne.imageFive = sportsOne.images[4];
    }

    sportsOne.instructionSet=[];
    sportsOne.cheatCodesSet=[]
    for (let i = 0; i < 5; i++) {
        sportsOne.instructionSet.push(sportsOne.instruction[i])
    }

    for (let j = 0; j < 5; j++) {
        sportsOne.cheatCodesSet.push(sportsOne.cheatCodes[j])
    }
    
    return sportsOne

}

async function addSports(name, about, instruction, refer, cheatCodes, url, images, link) {
    await validation.checkname(name);
    await validation.checkInfo(about);
    await validation.checkInstruction(instruction);
    await validation.checkCheatCode(cheatCodes);
    await validation.checkUrlList(url);
    await validation.checkUrl(refer);
    await validation.checkUrl(link);
    await validation.checkimage(images);
    const sportsCollection = await sports();
    let newSports = {
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
    const insertInfo = await sportsCollection.insertOne(newSports);
    if (insertInfo.insertedCount === 0) throw "could not add sports";
    return true;
}

module.exports = {
    getAllSportss,
    getSportsById,
    addSports
}