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
        console.log(x)
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
    //validation remaining

    const strategyCollection = await strategy();
    let strategy = await strategyCollection.findOne({ _id: ObjectId(strategyId.trim()) });
    if (strategy === null) throw 'No strategy with that id.';
    strategy._id = strategy._id.toString();
    if (strategy.images.length < 1) {
        strategy.images.push("no-strategy-image.png");
    }
    return strategy;
}

async function addStrategy(name, info, cheatCodes, url, images) {
    await validation.checkname(name);
    await validation.checkInfo(info);
    await validation.checkCheatCode(cheatCodes);
    await validation.checkUrl(url);
    await validation.checkimage(images);
    const strategyCollection = await strategy();
    let newStrategy = {
        name: name,
        info:info,
        cheatCodes:cheatCodes,
        url:url,
        images:images,
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