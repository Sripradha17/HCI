const mongoCollections = require('../config/mongoCollections');
const strategy = mongoCollections.strategy;
const validation = require('../data/validation');
const bcrypt = require('bcrypt');
const saltRounds = 16;
let { ObjectId } = require('mongodb');
const { response } = require('express');

async function getAllStrategys() {
    const strategyCollection = await strategy();
    const allStrategy = await strategyCollection.find({}).toArray();
    for (let x of allStrategy) {
        x._id = x._id.toString();
        // console.log(x)
        if (x.images.length < 1) {
            x.image = "no-strategy-image.png";
        }
        else {
            x.image = x.images[0];
        }
    }

    return allStrategy;
}

async function getStrategyById(strategyId) {

    const strategyCollection = await strategy();
    let strategyOne = await strategyCollection.findOne({ _id: ObjectId(strategyId.trim()) });
    if (strategyOne === null) {
        throw "No strategy game with Id found"
    }
    // console.log(x)
    if (strategyOne.images.length < 1) {
        strategyOne.image = "no-strategy-image.png";
    }
    else {
        strategyOne.imageOne = strategyOne.images[0];
        strategyOne.imageTwo = strategyOne.images[1];
        strategyOne.imageThree = strategyOne.images[2];
        strategyOne.imageFour = strategyOne.images[3];
        strategyOne.imageFive = strategyOne.images[4];
    }

    strategyOne.instructionSet=[];
    strategyOne.cheatCodesSet=[]
    for (let i = 0; i < 5; i++) {
        strategyOne.instructionSet.push(strategyOne.instruction[i])
    }

    for (let j = 0; j < 5; j++) {
        strategyOne.cheatCodesSet.push(strategyOne.cheatCodes[j])
    }
    
    return strategyOne

}

async function addStrategy(name, about, instruction, refer, cheatCodes, url, images, link) {
    await validation.checkname(name);
    await validation.checkInfo(about);
    await validation.checkInstruction(instruction);
    await validation.checkCheatCode(cheatCodes);
    await validation.checkUrlList(url);
    await validation.checkUrl(refer);
    await validation.checkUrl(link);
    await validation.checkimage(images);
    const strategyCollection = await strategy();
    let newStrategy = {
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
    const insertInfo = await strategyCollection.insertOne(newStrategy);
    if (insertInfo.insertedCount === 0) throw "could not add strategy";
    return true;
}



module.exports = {
    getAllStrategys,
    getStrategyById,
    addStrategy
}