const mongoCollections = require('../config/mongoCollections');  // Author Kartik

const reviews = mongoCollections.reviews;  // Author Kartik
const userData = require('./users');
const hotelData = require('./hotels');
//const userData = data.users;
const validation = require('../data/validation');

//const validation = require('./validation');   // Author Kartik

let { ObjectId } = require('mongodb');   // Author Kartik


module.exports = {   // Author Kartik

    async getReviewById(reviewId) {   // Author Kartik

        if (!validation.validString(reviewId)) throw 'Review id is not a valid string.';    // Author Kartik

        let parsedId = ObjectId(reviewId);   // Author Kartik

        const reviewCollection = await reviews();  // Author Kartik

        let review = await reviewCollection.findOne({ _id: parsedId });  // Author Kartik

        if (review === null) throw 'No review with that id.';  // Author Kartik

        review._id = review._id.toString();   // Author Kartik


        return review;  // Author Kartik
    },

    async createReview(reviewerId, hotelId, title, description, rating, dateOfReview) {     // Author Kartik
        try {
            if (!await validation.validString(reviewerId)) throw 'Reviewer id is not a valid string.';   // Author Kartik
            if (!await validation.validString(hotelId)) throw 'Hotel id is not a valid string.';   // Author Kartik
            if (!await validation.validString(title)) throw 'title text is not a valid string.';   // Author Kartik
            if (!await validation.validString(description)) throw 'description text is not a valid string.';   // Author Kartik
            try {
                await validation.checkrating(rating)
            } catch (error) {
                throw error;
            }
            if (!await validation.validString(dateOfReview)) throw 'dateOfReview text is not a valid format.';   // Author Kartik
            try {
                await this.getReviewbyExistUser(hotelId, reviewerId);

            } catch (error) {
                throw error;
            }

            let newReview = {  // Author Kartik
                reviewerId: reviewerId,  // Author Kartik
                hotelId: hotelId,   // Author Kartik
                Title: title,
                description: description,  // Author Kartik
                rating: parseInt(rating),  // Author Kartik
                likes: [],  // Author Kartik
                dislikes: [],   // Author Kartik
                dateOfReview: dateOfReview   // Author Kartik
            };
            const reviewCollection = await reviews();  // Author Kartik

            const insertInfo = await reviewCollection.insertOne(newReview);  // Author Kartik
            if (insertInfo.insertedCount === 0) throw 'Could not add review.';  // Author Kartik

            const newId = insertInfo.insertedId;

            let allReviews = await this.getAllReviewsByHotelId(hotelId);
            let total = 0;
            for (let i = 0; i < allReviews.length; i++) {
                total += allReviews[i].rating;
            }
            let avg = total / allReviews.length;
            if (isNaN(avg)) {
                avg = 0;
            }
            else {
                avg = Math.round(avg * 10) / 10;
            }
            await hotelData.addReviewIds(hotelId, newId, avg);

            return true;
        } catch (error) {
            throw error;
        }

    },
    async getReviewbyExistUser(hotelId, reviewerId) {
        const reviewCollection = await reviews();  // Author Kartik

        let review = await reviewCollection.findOne({ hotelId: hotelId, reviewerId: reviewerId });  // Author Kartik
        if (review != null) {
            throw "Already exist your review of this hotel."
        }
    },
    async updateReview(reviewerId, hotelId, Title, description, rating, dateOfReview) {
        if (!validation.validString(reviewerId)) throw 'Reviewer id is not a valid string.';   // Author Kartik

        if (!validation.validString(hotelId)) throw 'Hotel id is not a valid string.';   // Author Kartik


        if (!validation.validString(Title)) throw 'title text is not a valid string.';   // Author Kartik

        if (!validation.validString(description)) throw 'description text is not a valid string.';   // Author Kartik

        if (!validation.validString(rating)) throw 'rating text is not a valid format.';   // Author Kartik

        if (!validation.validString(dateOfReview)) throw 'dateOfReview text is not a valid format.';   // Author Kartik
    },


    async getAllReviewsOfUser(reviewerId) {
        if (!validation.validString(reviewerId)) throw 'Reviewer id is not a valid string.';

        const reviewCollection = await reviews();
        const reviewList = await reviewCollection.find({ 'reviewerId': { $eq: reviewerId } }).toArray();
        for (let x of reviewList) {
            x._id = x._id.toString();
        }

        return reviewList;
    },

    async getAllReviewsByHotelId(hotelId) {
        if (!validation.validString(hotelId)) throw 'Hotel id is not a valid string.';

        const reviewCollection = await reviews();
        const reviewList = await reviewCollection.find({ 'hotelId': { $eq: hotelId } }).toArray();
        for (let x of reviewList) {
            let user = await userData.getUserById(x.reviewerId);
            x._id = x._id.toString();
            x.user_name = user.firstName + " " + user.lastName;
        }
        return reviewList;
    },
    async  checkLikeReview(reviewId,userId) {
        //validation remaining
    
        let review = (await this.getReviewById(reviewId));
        if (review === null) throw 'No review found with that id.';
        if(review.likes.includes(userId))
        {
            return true;
        }
        else{
            return false;
        }
    },
    async  AddRemoveLikeReview(reviewId,userId) {
        //validation remaining
    
        let review = (await this.getReviewById(reviewId));
        if (review === null) throw 'No review found with that id.';
        if(review.likes.includes(userId))
        {
            let updateReview = {
                likes: userId
            };
            const reviewCollection = await reviews();
            const updatedInfo = await reviewCollection.updateOne({ _id: ObjectId(reviewId) }, { $pull: updateReview });
            if (updatedInfo.modifiedCount === 0) throw 'Could not  unliked your review successfully.';
            return true;
        
        }
        else{
            let updateReview = {
                likes: userId,
            };
            let removedislike={
                dislikes:userId
            }
            const reviewCollection = await reviews();
            const updatedInfo = await reviewCollection.updateOne({ _id: ObjectId(reviewId) }, { $push: updateReview,$pull:removedislike });
            if (updatedInfo.modifiedCount === 0) throw 'Could not  liked your review successfully.';
            return true;
    
        }
    }   , 
    async  checkdislikeLikeReview(reviewId,userId) {
        //validation remaining
    
        let review = (await this.getReviewById(reviewId));
        if (review === null) throw 'No review found with that id.';
        if(review.dislikes.includes(userId))
        {
            return true;
        }
        else{
            return false;
        }
    },
    async  AddRemoveDislikeReview(reviewId,userId) {
        //validation remaining
    
        let review = (await this.getReviewById(reviewId));
        if (review === null) throw 'No review found with that id.';
        if(review.dislikes.includes(userId))
        {
            let updateReview = {
                dislikes: userId
            };
            const reviewCollection = await reviews();
            const updatedInfo = await reviewCollection.updateOne({ _id: ObjectId(reviewId) }, { $pull: updateReview });
            if (updatedInfo.modifiedCount === 0) throw 'Could not  unliked your review successfully.';
            return true;
        
        }
        else{
            let updateReview = {
                dislikes: userId,
            };
            let removelike={
                likes:userId
            }
            const reviewCollection = await reviews();
            const updatedInfo = await reviewCollection.updateOne({ _id: ObjectId(reviewId) }, { $push: updateReview,$pull:removelike });
            if (updatedInfo.modifiedCount === 0) throw 'Could not  disliked your review successfully.';
            return true;
    
        }
    },
    async getReviewByUserId(userId)
    {
        const reviewCollection = await reviews();
        let allReveiws = await reviewCollection.find({ reviewerId: userId }).toArray();
        for (let x of allReveiws) {
            let hotel=await hotelData.getHotelById(x.hotelId);
            x._id = x._id.toString();
            x.hotelName=hotel.name;
        }
    
        return allReveiws;

    },
    async  deleteReview(reviewId) {
        //validation remaining
     let hotelId="";
        let review = await this.getReviewById(reviewId);
        if (review === null) throw 'No review found with that id.';
        hotelId=review.hotelId
        const reviewCollection = await reviews();
        const updatedInfo = await reviewCollection.deleteOne({ _id: ObjectId(reviewId) });
        let allReviews = await this.getAllReviewsByHotelId(hotelId);
        let total = 0;
        for (let i = 0; i < allReviews.length; i++) {
            total += allReviews[i].rating;
        }
        let avg = total / allReviews.length;
        if (isNaN(avg)) {
            avg = 0;
        }
        else {
            avg = Math.round(avg * 10) / 10;
        }
        await hotelData.removeReviewIds(hotelId, reviewId, avg);

        return true;
    }
    
}
