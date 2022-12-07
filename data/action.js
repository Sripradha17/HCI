const mongoCollections = require('../config/mongoCollections');
const actionGame = mongoCollections.action;
const validation = require('../data/validation');
const bcrypt = require('bcrypt');
const saltRounds = 16;
let { ObjectId } = require('mongodb');
const { response } = require('express');
const { action } = require('../config/mongoCollections');

async function getAllActions(search) {
    const actionCollection = await actionGame();
    let allAction = await actionCollection.find({}).toArray();
    for (let x of allAction) {
        x._id = x._id.toString();
        if (x.images.length < 1) {
            x.image = "no-action-image.png";
        }
        else {
            x.image = x.images[0];
        }

        x.partAbout = x.about.substr(0, 60)
    }

    if (search != undefined && search != "") {
        allAction = allAction.filter(function (item) {
            return item.name.trim().includes(search.trim());
        });
    }

    return allAction;
}

async function getActionById(actionId) {

    const actionCollection = await actionGame();
    let actionOne = await actionCollection.findOne({ _id: ObjectId(actionId.trim()) });
    if (actionOne === null) {
        throw "No action game with Id found"
    }

    if (actionOne.images.length < 1) {
        actionOne.image = "no-action-image.png";
    }
    else {
        actionOne.imageOne = actionOne.images[1];
        actionOne.imageTwo = actionOne.images[2];
        actionOne.imageThree = actionOne.images[3];
        actionOne.imageFour = actionOne.images[4];
    }

    actionOne.cheatCodesSet = []
    for (let j = 0; j < 5; j++) {
        if (actionOne.cheatCodes[j]) {
            actionOne.cheatCodesSet.push(actionOne.cheatCodes[j])
        }else{
            break;
        }
    }
    
    actionOne.urlNameOne = actionOne.url[0];
    actionOne.urlOne = actionOne.url[1]
    actionOne.urlNameTwo = actionOne.url[2];
    actionOne.urlTwo = actionOne.url[3]
    actionOne.urlNameThree = actionOne.url[4];
    actionOne.urlThree = actionOne.url[5]
    actionOne.urlNameFour = actionOne.url[6];
    actionOne.urlFour = actionOne.url[7]
    actionOne.urlNameFive = actionOne.url[8];
    actionOne.urlFive = actionOne.url[9]
    actionOne.urlNameSix = actionOne.url[10];
    actionOne.urlSix = actionOne.url[11]
    actionOne.urlNameSeven = actionOne.url[12];
    actionOne.urlSeven = actionOne.url[13]
    actionOne.urlNameEight = actionOne.url[14];
    actionOne.urlEight = actionOne.url[15]

    return actionOne

}

async function addAction(name, about, instruction, refer, cheatCodes, url, images, link) {
    await validation.checkname(name);
    await validation.checkInfo(about);
    await validation.checkInstruction(instruction);
    await validation.checkCheatCode(cheatCodes);
    await validation.checkUrlList(url);
    await validation.checkUrl(refer);
    await validation.checkUrl(link);
    await validation.checkimage(images);
    const actionCollection = await actionGame();
    let newAction = {
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
    const insertInfo = await actionCollection.insertOne(newAction);
    if (insertInfo.insertedCount === 0) throw "could not add action";
    return true;
}

async function addReviewIds(gid, reviewId, avg) {
    let action = await this.getActionById(gid);
    if (action === null) throw 'No user found with that id.';
    let addReview = {
        reviewId
    };
    let updateAction = {
        rating: avg
    };
    const actionCollection = await actionGame();
    const updatedReview = await actionCollection.updateOne({ _id: ObjectId(gid) },
        { $push: { reviews: addReview } });

    if (updatedReview.modifiedCount === 0) throw 'Could not adde review.';
    const updatedInfo = await actionCollection.updateOne({ _id: ObjectId(gid) },
        { $set: updateAction });
    if (updatedInfo.modifiedCount === 0) throw 'Could not adde review.';
    return true;
}

async function removeReviewIds(gid, reviewId, avg) {
    let action = (await this.getActionById(gid));
    if (action === null) throw 'No user found with that id.';
    let addReview = {
        reviewId
    };
    let updateAction = {
        rating: avg
    };
    const actionCollection = await actionGame();
    const updatedReview = await actionCollection.updateOne({ _id: ObjectId(gid) },
        { $pull: { reviews: addReview } });

    const updatedInfo = await actionCollection.updateOne({ _id: ObjectId(gid) },
        { $set: updateAction });
    return true;
}
module.exports = {
    getAllActions,
    getActionById,
    addAction,
    addReviewIds,
    removeReviewIds
}