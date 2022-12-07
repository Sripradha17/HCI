const mongoCollections = require('../config/mongoCollections');
const sportsGame = mongoCollections.sports;
const validation = require('../data/validation');
const bcrypt = require('bcrypt');
const saltRounds = 16;
let { ObjectId } = require('mongodb');
const { response } = require('express');

async function getAllSportss(search) {
    const sportsCollection = await sportsGame();
    var allSports = await sportsCollection.find({}).toArray();
    for (let x of allSports) {
        x._id = x._id.toString();
        if (x.images.length < 1) {
            x.image = "no-sports-image.png";
        }
        else {
            x.image = x.images[0];
        }
        x.partAbout = x.about.substr(0,60)

    }
    
    if (search != undefined) {
        allSports = allSports.filter(function (item) {
            return (item.name.trim()).toLowerCase().includes(search.trim().toLowerCase());
        });
    }
    return allSports;
}

async function getSportsById(sportsId) {

    const sportsCollection = await sportsGame();
    var sportsOne = await sportsCollection.findOne({ _id: ObjectId(sportsId.trim()) });
    if (sportsOne === null) {
        throw "No sports game with Id found"
    }
    if (sportsOne.images.length < 1) {
        sportsOne.image = "no-sports-image.png";
    }
    else {
        sportsOne.imageOne = sportsOne.images[1];
        sportsOne.imageTwo = sportsOne.images[2];
        sportsOne.imageThree = sportsOne.images[3];
        sportsOne.imageFour = sportsOne.images[4];
    }

    sportsOne.cheatCodesSet = []
    for (let j = 0; j < 5; j++) {
        if (sportsOne.cheatCodes[j]) {
            sportsOne.cheatCodesSet.push(sportsOne.cheatCodes[j])
        }else{
            break;
        }
    }
    
    sportsOne.urlNameOne = sportsOne.url[0];
    sportsOne.urlOne = sportsOne.url[1]
    sportsOne.urlNameTwo = sportsOne.url[2];
    sportsOne.urlTwo = sportsOne.url[3]
    sportsOne.urlNameThree = sportsOne.url[4];
    sportsOne.urlThree = sportsOne.url[5]
    sportsOne.urlNameFour = sportsOne.url[6];
    sportsOne.urlFour = sportsOne.url[7]
    sportsOne.urlNameFive = sportsOne.url[8];
    sportsOne.urlFive = sportsOne.url[9]
    sportsOne.urlNameSix = sportsOne.url[10];
    sportsOne.urlSix = sportsOne.url[11]
    sportsOne.urlNameSeven = sportsOne.url[12];
    sportsOne.urlSeven = sportsOne.url[13]
    sportsOne.urlNameEight = sportsOne.url[14];
    sportsOne.urlEight = sportsOne.url[15]
    
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
    const sportsCollection = await sportsGame();
    let newSports = {
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
    const insertInfo = await sportsCollection.insertOne(newSports);
    if (insertInfo.insertedCount === 0) throw "could not add sports";
    return true;
}

async function addReviewIds(gid, reviewId, avg) {
    let sports = (await this.getSportsById(gid));
    if (sports === null) throw 'No user found with that id.';
    let addReview = {
        reviewId
    };
    let updateSports = {
        rating: avg
    };
    const sportsCollection = await sportsGame();
    const updatedReview = await sportsCollection.updateOne({ _id: ObjectId(gid) },
        { $push: { reviews: addReview } });

    if (updatedReview.modifiedCount === 0) throw 'Could not add review.';
    const updatedInfo = await sportsCollection.updateOne({ _id: ObjectId(gid) },
        { $set: updateSports });
    if (updatedInfo.modifiedCount === 0) throw 'Could not add review.';
    return true;
}

async function removeReviewIds(gid, reviewId, avg) {
    let sports = (await this.getSportsById(gid));
    if (sports === null) throw 'No user found with that id.';
    let addReview = {
        reviewId
    };
    let updateSports = {
        rating: avg
    };
    const sportsCollection = await sportsGame();
    const updatedReview = await sportsCollection.updateOne({ _id: ObjectId(gid) },
        { $pull: { reviews: addReview } });

    const updatedInfo = await sportsCollection.updateOne({ _id: ObjectId(gid) },
        { $set: updateSports });
    return true;
}
module.exports = {
    getAllSportss,
    getSportsById,
    addSports,
    addReviewIds,
    removeReviewIds
}