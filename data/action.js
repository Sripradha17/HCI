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

    const actionCollection = await action();
    let actionOne = await actionCollection.findOne({ _id: ObjectId(actionId.trim()) });
    if (actionOne === null) {
        throw "No action game with Id found"
    }
    // console.log(x)
    if (actionOne.images.length < 1) {
        actionOne.image = "no-action-image.png";
    }
    else {
        actionOne.imageOne = actionOne.images[0];
        actionOne.imageTwo = actionOne.images[1];
        actionOne.imageThree = actionOne.images[2];
        actionOne.imageFour = actionOne.images[3];
        actionOne.imageFive = actionOne.images[4];
    }

    actionOne.instructionSet=[];
    actionOne.cheatCodesSet=[]
    for (let i = 0; i < 5; i++) {
        actionOne.instructionSet.push(actionOne.instruction[i])
    }

    for (let j = 0; j < 5; j++) {
        actionOne.cheatCodesSet.push(actionOne.cheatCodes[j])
    }
    
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
    const actionCollection = await action();
    let newAction = {
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
    const insertInfo = await actionCollection.insertOne(newAction);
    if (insertInfo.insertedCount === 0) throw "could not add action";
    return true;
}

module.exports = {
    getAllActions,
    getActionById,
    addAction
}