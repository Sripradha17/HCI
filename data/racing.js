const mongoCollections = require('../config/mongoCollections');
const racingGame = mongoCollections.racing;
const validation = require('../data/validation');
const bcrypt = require('bcrypt');
const saltRounds = 16;
let { ObjectId } = require('mongodb');
const { response } = require('express');

async function getAllRacings(search) {
    const racingCollection = await racingGame();
    let allRacing = await racingCollection.find({}).toArray();
    for (let x of allRacing) {
        x._id = x._id.toString();
        if (x.images.length < 1) {
            x.image = "no-racing-image.png";
        }
        else {
            x.image = x.images[0];
        }

        x.partAbout = x.about.substr(0,60)

    }

    if (search != undefined && search != "") {
        allRacing = allRacing.filter(function (item) {
            return item.name.trim().includes(search.trim());
        });
    }

    return allRacing;
}

async function getRacingById(racingId) {

    const racingCollection = await racingGame();
    let racingOne = await racingCollection.findOne({ _id: ObjectId(racingId.trim()) });
    if (racingOne === null) {
        throw "No racing game with Id found"
    }
    if (racingOne.images.length < 1) {
        racingOne.image = "no-racing-image.png";
    }
    else {
        racingOne.imageOne = racingOne.images[1];
        racingOne.imageTwo = racingOne.images[2];
        racingOne.imageThree = racingOne.images[3];
        racingOne.imageFour = racingOne.images[4];
    }

    racingOne.cheatCodesSet = []
    for (let j = 0; j < 5; j++) {
        if (racingOne.cheatCodes[j]) {
            racingOne.cheatCodesSet.push(racingOne.cheatCodes[j])
        }else{
            break;
        }
    }
    
    racingOne.urlNameOne = racingOne.url[0];
    racingOne.urlOne = racingOne.url[1]
    racingOne.urlNameTwo = racingOne.url[2];
    racingOne.urlTwo = racingOne.url[3]
    racingOne.urlNameThree = racingOne.url[4];
    racingOne.urlThree = racingOne.url[5]
    racingOne.urlNameFour = racingOne.url[6];
    racingOne.urlFour = racingOne.url[7]
    racingOne.urlNameFive = racingOne.url[8];
    racingOne.urlFive = racingOne.url[9]
    racingOne.urlNameSix = racingOne.url[10];
    racingOne.urlSix = racingOne.url[11]
    racingOne.urlNameSeven = racingOne.url[12];
    racingOne.urlSeven = racingOne.url[13]
    racingOne.urlNameEight = racingOne.url[14];
    racingOne.urlEight = racingOne.url[15]
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
    const racingCollection = await racingGame();
    let newRacing = {
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
    const insertInfo = await racingCollection.insertOne(newRacing);
    if (insertInfo.insertedCount === 0) throw "could not add racing";
    return true;
}

async function addReviewIds(gid, reviewId, avg) {
    let racing = (await this.getRacingById(gid));
    if (racing === null) throw 'No user found with that id.';
    let addReview = {
        reviewId
    };
    let updateRacing = {
        rating: avg
    };
    const racingCollection = await racingGame();
    const updatedReview = await racingCollection.updateOne({ _id: ObjectId(gid) },
        { $push: { reviews: addReview } });

    if (updatedReview.modifiedCount === 0) throw 'Could not add review.';
    const updatedInfo = await racingCollection.updateOne({ _id: ObjectId(gid) },
        { $set: updateRacing });
    if (updatedInfo.modifiedCount === 0) throw 'Could not add review.';
    return true;
}

async function removeReviewIds(gid, reviewId, avg) {
    let racing = (await this.getRacingById(gid));
    if (racing === null) throw 'No user found with that id.';
    let addReview = {
        reviewId
    };
    let updateRacing = {
        rating: avg
    };
    const racingCollection = await racingGame();
    const updatedReview = await racingCollection.updateOne({ _id: ObjectId(gid) },
        { $pull: { reviews: addReview } });

    const updatedInfo = await racingCollection.updateOne({ _id: ObjectId(gid) },
        { $set: updateRacing });
    return true;
}
module.exports = {
    getAllRacings,
    getRacingById,
    addRacing,
    addReviewIds,
    removeReviewIds
}