const mongoCollections = require('../config/mongoCollections');
const hotels = mongoCollections.hotels;
const validation = require('../data/validation');
const bcrypt = require('bcrypt');
const saltRounds = 16;
let { ObjectId } = require('mongodb');
const { response } = require('express');

async function getAllHotels() {
    const hotelCollection = await hotels();
    const allHotels = await hotelCollection.find({}).toArray();
    for (let x of allHotels) {
        x._id = x._id.toString();
        if (x.images.length < 1) {
            x.image = "no-hotel-image.png";
        }
        else {
            x.image = x.images[0];
        }
    }

    return allHotels;
}
async function getAllActiveHotels() {
    const hotelCollection = await hotels();
    const allHotels = await hotelCollection.find({ status: 2 }).sort({ _id: -1 }).toArray();
    for (let x of allHotels) {
        x._id = x._id.toString();
        if (x.images.length < 1) {
            x.image = "no-hotel-image.png";
        }
        else {
            x.image = x.images[0];
        }
    }

    return allHotels;
}
async function getAllActiveHotels_Search(category, search_term) {

    const hotelCollection = await hotels();
    let allHotels = await hotelCollection.find({ status: 2 }).toArray();

    if (category != undefined && category != "") {
        allHotels = allHotels.filter(function (item) {
            return item.category.trim() == category.trim();
        });

    }
    if (search_term != undefined && search_term != "") {
        allHotels = allHotels.filter(function (item) {
            return item.name.trim().includes(search_term.trim()) || item.city.trim().includes(search_term.trim()) || item.state.trim().includes(search_term.trim());
        });

    }
    for (let x of allHotels) {
        x._id = x._id.toString();
        if (x.images.length < 1) {
            x.image = "no-hotel-image.png";
        }
        else {
            x.image = x.images[0];
        }
    }

    return allHotels;

}
async function getHotelById(hotelId) {
    //validation remaining

    const hotelCollection = await hotels();
    let hotel = await hotelCollection.findOne({ _id: ObjectId(hotelId.trim()) });
    if (hotel === null) throw 'No hotel with that id.';
    hotel._id = hotel._id.toString();
    if (hotel.images.length < 1) {
        hotel.images.push("no-hotel-image.png");
    }
    return hotel;
}
async function approveHotel(hotelId) {
    //validation remaining

    let hotel = (await this.getHotelById(hotelId));
    if (hotel === null) throw 'No hotel found with that id.';
    let updatehotel = {
        status: 2
    };
    const hotelCollection = await hotels();
    const updatedInfo = await hotelCollection.updateOne({ _id: ObjectId(hotelId) }, { $set: updatehotel });
    if (updatedInfo.modifiedCount === 0) throw 'Could not approved hotel successfully.';
    return true;
}
async function rejectHotel(hotelId) {
    //validation remaining

    let hotel = (await this.getHotelById(hotelId));
    if (hotel === null) throw 'No user found with that id.';
    let updateHotel = {
        status: 3
    };
    const hotelCollection = await hotels();
    const updatedInfo = await hotelCollection.updateOne({ _id: ObjectId(hotelId) }, { $set: updateHotel });
    if (updatedInfo.modifiedCount === 0) throw 'Could not reject hotel successfully.';
    return true;
}
async function addHotel(name, address, city, state, category, zipCode, onSiteServices, priceRange, latitude, longtitude, userId, images, status) {
    await validation.checkcategory(category);
    await validation.checkcityname(city);
    await validation.checkhoteladdress(address);
    await validation.checkhotelname(name);
    await validation.checklatitude(latitude);
    await validation.checkonSiteServices(onSiteServices);
    await validation.checkpriceRange(priceRange);
    await validation.checkstatename(state);
    await validation.checkzipcode(zipCode);
    await validation.checklongtitude(longtitude);
    await validation.checkimage(images);
    const hotelCollection = await hotels();
    let newHotel = {
        name: name,
        address: address,
        city: city,
        state: state,
        category: category,
        state: state,
        zipCode: zipCode,
        onSiteServices: onSiteServices,
        priceRange: priceRange,
        latitude: latitude,
        longtitude: longtitude,
        userId: userId,
        status: status,
        addedBy: userId,
        reviews: [],
        images: images,
        rating: 0
    }
    const insertInfo = await hotelCollection.insertOne(newHotel);
    if (insertInfo.insertedCount === 0) throw "could not add hotel";
    return true;
}
async function updateHotel(hotelId,name, address, city, state, category, zipCode, onSiteServices, priceRange, latitude, longtitude, userId, images, status) {
    await validation.checkcategory(category);
    await validation.checkcityname(city);
    await validation.checkhoteladdress(address);
    await validation.checkhotelname(name);

    await validation.checklatitude(latitude);
    await validation.checkonSiteServices(onSiteServices);
    await validation.checkpriceRange(priceRange);
    await validation.checkstatename(state);
    await validation.checkzipcode(zipCode);
    await validation.checklongtitude(longtitude);
    await validation.checkimage(images);
    let hotel = await this.getHotelById(hotelId);
    if (hotel.status == 2) {
        if (hotel.addedBy != userId) {
            throw "Something going wrong"
        }

        const hotelCollection = await hotels();
        let updateHotel = {
            name: name,
            address: address,
            city: city,
            state: state,
            category: category,
            state: state,
            zipCode: zipCode,
            onSiteServices: onSiteServices,
            priceRange: priceRange,
            latitude: latitude,
            longtitude: longtitude,
            images: images,
        }
        let newimage = {
            images
        }
        const updateInfo = await hotelCollection.updateOne({ _id: ObjectId(hotelId) },
            { $set: updateHotel });
        if (updateInfo.modifiedCount === 0) throw "could not update hotel";
        const updatedInfo = await hotelCollection.update({ _id: ObjectId(hotelId) },
            { $push: { images: images } });

        return true;
    }
    else{
        throw "Something going wrong";
    }
}

async function addReviewIds(hotelId, reviewId, avg) {
    let hotel = (await this.getHotelById(hotelId));
    if (hotel === null) throw 'No user found with that id.';

    let addReview = {
        reviewId
    };
    let updateHotel = {
        rating: avg
    };
    const hotelCollection = await hotels();
    const updatedReview = await hotelCollection.update({ _id: ObjectId(hotelId) },
        { $push: { reviews: addReview } });

    if (updatedReview.modifiedCount === 0) throw 'Could not added review.';


    const updatedInfo = await hotelCollection.update({ _id: ObjectId(hotelId) },
        { $set: updateHotel });
    if (updatedInfo.modifiedCount === 0) throw 'Could not added review.';


    return true;

}
async function removeReviewIds(hotelId, reviewId, avg) {
    let hotel = (await this.getHotelById(hotelId));
    if (hotel === null) throw 'No user found with that id.';

    let addReview = {
        reviewId
    };
    let updateHotel = {
        rating: avg
    };
    const hotelCollection = await hotels();
    const updatedReview = await hotelCollection.update({ _id: ObjectId(hotelId) },
        { $pull: { reviews: addReview } });

    //if (updatedReview.modifiedCount === 0) throw 'Could not added review.';


    const updatedInfo = await hotelCollection.update({ _id: ObjectId(hotelId) },
        { $set: updateHotel });
    //if (updatedInfo.modifiedCount === 0) throw 'Could not added review.';

    return true;

}
module.exports = {
    getAllHotels,
    approveHotel,
    getHotelById,
    rejectHotel,
    getAllActiveHotels,
    getAllActiveHotels_Search,
    addHotel,
    addReviewIds,
    removeReviewIds,
    updateHotel
}