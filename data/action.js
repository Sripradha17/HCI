const mongoCollections = require('../config/mongoCollections');
const action = mongoCollections.action;
const validation = require('../data/validation');
const bcrypt = require('bcrypt');
const saltRounds = 16;
let { ObjectId } = require('mongodb');
const { response } = require('express');

async function getAllActions() {
    const actionCollection = await action();
    const allAction = await actionCollection.find({}).toArray();
    for (let x of allAction) {
        x._id = x._id.toString();
        // console.log(x)
        if (x.images.length < 1) {
            x.image = "no-action-image.png";
        }
        else {
            x.image = x.images[0];
        }
    }

    return allAction;
}

async function getActionById(actionId) {
    //validation remaining

    const actionCollection = await action();
    let action = await actionCollection.findOne({ _id: ObjectId(actionId.trim()) });
    if (action === null) throw 'No action with that id.';
    action._id = action._id.toString();
    if (action.images.length < 1) {
        action.images.push("no-action-image.png");
    }
    return action;
}

async function addAction(name, info, cheatCodes, url, images) {
    await validation.checkname(name);
    await validation.checkInfo(info);
    await validation.checkCheatCode(cheatCodes);
    await validation.checkUrl(url);
    await validation.checkimage(images);
    const actionCollection = await action();
    let newAction = {
        name: name,
        info:info,
        cheatCodes:cheatCodes,
        url:url,
        images:images,
        rating: 0
    }
    const insertInfo = await actionCollection.insertOne(newAction);
    if (insertInfo.insertedCount === 0) throw "could not add action";
    return true;
}

module.exports = {
    getAllActions,
    getActionById,
    addAction
}