const mongoCollections = require('../config/mongoCollections');
const strategyGame = mongoCollections.strategy;
const validation = require('../data/validation');
const bcrypt = require('bcrypt');
const saltRounds = 16;
let { ObjectId } = require('mongodb');
const { response } = require('express');

async function getAllStrategys() {
    const strategyCollection = await strategyGame();
    const allStrategy = await strategyCollection.find({}).toArray();
    for (let x of allStrategy) {
        x._id = x._id.toString();
        if (x.images.length < 1) {
            x.image = "no-strategy-image.png";
        }
        else {
            x.image = x.images[0];
        }
        x.partAbout = x.about.substr(0,60)

    }

    return allStrategy;
}

async function getStrategyById(strategyId) {

    const strategyCollection = await strategyGame();
    let strategyOne = await strategyCollection.findOne({ _id: ObjectId(strategyId.trim()) });
    if (strategyOne === null) {
        throw "No strategy game with Id found"
    }
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

    strategyOne.cheatCodesSet = []
    for (let j = 0; j < 5; j++) {
        if (strategyOne.cheatCodes[j]) {
            strategyOne.cheatCodesSet.push(strategyOne.cheatCodes[j])
        }else{
            break;
        }
    }
    
    strategyOne.urlNameOne = strategyOne.url[0];
    strategyOne.urlOne = strategyOne.url[1]
    strategyOne.urlNameTwo = strategyOne.url[2];
    strategyOne.urlTwo = strategyOne.url[3]
    strategyOne.urlNameThree = strategyOne.url[4];
    strategyOne.urlThree = strategyOne.url[5]
    strategyOne.urlNameFour = strategyOne.url[6];
    strategyOne.urlFour = strategyOne.url[7]
    strategyOne.urlNameFive = strategyOne.url[8];
    strategyOne.urlFive = strategyOne.url[9]
    strategyOne.urlNameSix = strategyOne.url[10];
    strategyOne.urlSix = strategyOne.url[11]
    strategyOne.urlNameSeven = strategyOne.url[12];
    strategyOne.urlSeven = strategyOne.url[13]
    strategyOne.urlNameEight = strategyOne.url[14];
    strategyOne.urlEight = strategyOne.url[15]
    console.log(strategyOne)
    
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
    const strategyCollection = await strategyGame();
    let newStrategy = {
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
    const insertInfo = await strategyCollection.insertOne(newStrategy);
    if (insertInfo.insertedCount === 0) throw "could not add strategy";
    return true;
}

async function addReviewIds(gid, reviewId, avg) {
    let strategy = (await this.getStrategyById(gid));
    if (strategy === null) throw 'No user found with that id.';
    let addReview = {
        reviewId
    };
    let updatestrategy = {
        rating: avg
    };
    const strategyCollection = await strategyGame();
    const updatedReview = await strategyCollection.updateOne({ _id: ObjectId(gid) },
        { $push: { reviews: addReview } });

    if (updatedReview.modifiedCount === 0) throw 'Could not added review.';
    const updatedInfo = await strategyCollection.updateOne({ _id: ObjectId(gid) },
        { $set: updatestrategy });
    if (updatedInfo.modifiedCount === 0) throw 'Could not added review.';
    return true;
}

async function removeReviewIds(gid, reviewId, avg) {
    let strategy = (await this.getStrategyById(gid));
    if (strategy === null) throw 'No user found with that id.';
    let addReview = {
        reviewId
    };
    let updatestrategy = {
        rating: avg
    };
    const strategyCollection = await strategyGame();
    const updatedReview = await strategyCollection.updateOne({ _id: ObjectId(gid) },
        { $pull: { reviews: addReview } });

    const updatedInfo = await strategyCollection.updateOne({ _id: ObjectId(gid) },
        { $set: updatestrategy });
    return true;
}

module.exports = {
    getAllStrategys,
    getStrategyById,
    addStrategy,
    addReviewIds,
    removeReviewIds
}