const mongoCollections = require('../config/mongoCollections');
const reviews = mongoCollections.reviews;
const action = mongoCollections.action;
const puzzle = mongoCollections.puzzle;
const racing = mongoCollections.racing;
const sports = mongoCollections.sports;
const strategy = mongoCollections.strategy;
const userData = require('./users');
const validation = require('../data/validation');
const puzzleData = require('./puzzle');
const actionData = require('./action');
const racingData = require('./racing');
const strategyData = require('./strategy');
const sportsData = require('./sports');

let { ObjectId } = require('mongodb');


module.exports = {

    async getReviewById(reviewId) {

        if (!validation.validString(reviewId)) throw 'Review id is not a valid string.';

        let parsedId = ObjectId(reviewId);

        const reviewCollection = await reviews();

        let review = await reviewCollection.findOne({ _id: parsedId });

        if (review === null) throw 'No review with that id.';

        review._id = review._id.toString();


        return review;
    },

    async createReview(reviewerId, gameId, title, description, rating, dateOfReview) {
        try {
            if (!await validation.validString(reviewerId)) throw 'Reviewer id is not a valid string.';
            if (!await validation.validString(gameId)) throw 'Game id is not a valid string.';
            if (!await validation.validString(title)) throw 'title text is not a valid string.';
            if (!await validation.validString(description)) throw 'description text is not a valid string.';
            try {
                await validation.checkrating(rating)
            } catch (error) {
                throw error;
            }
            if (!await validation.validString(dateOfReview)) throw 'dateOfReview text is not a valid format.';
            try {
                await this.getReviewbyExistUser(gameId, reviewerId);

            } catch (error) {
                throw error;
            }

            let newReview = {
                reviewerId: reviewerId,
                gameId: gameId,
                Title: title,
                description: description,
                rating: parseInt(rating),
                likes: [],
                dislikes: [],
                dateOfReview: dateOfReview
            };
            const reviewCollection = await reviews();

            const insertInfo = await reviewCollection.insertOne(newReview);
            if (insertInfo.insertedCount === 0) throw 'Could not add review.';

            const newId = insertInfo.insertedId;

            let allReviews = await this.getAllReviewsBygameId(gameId);
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

            const actionCollection = await action();
            let actionOne = await actionCollection.findOne({ _id: ObjectId(gameId.trim()) });
            const puzzleCollection = await puzzle();
            let puzzleOne = await puzzleCollection.findOne({ _id: ObjectId(gameId.trim()) });
            const racingCollection = await racing();
            let racingOne = await racingCollection.findOne({ _id: ObjectId(gameId.trim()) });
            const sportsCollection = await sports();
            let sportsOne = await sportsCollection.findOne({ _id: ObjectId(gameId.trim()) });
            const strategyCollection = await strategy();
            let strategyOne = await strategyCollection.findOne({ _id: ObjectId(gameId.trim()) });
            if (puzzleOne) {
                await puzzleData.addReviewIds(gameId, newId, avg);
            } else if (actionOne) {
                await actionData.addReviewIds(gameId, newId, avg);
            } else if (racingOne) {
                await racingData.addReviewIds(gameId, newId, avg);
            } else if (sportsOne) {
                await sportsData.addReviewIds(gameId, newId, avg);
            } else if (strategyOne) {
                await strategyData.addReviewIds(gameId, newId, avg);
            } else {
                return false;
            }

            return true;
        } catch (error) {
            throw error;
        }

    },

    async getReviewbyExistUser(gameId, reviewerId) {
        const reviewCollection = await reviews();

        let review = await reviewCollection.findOne({ gameId: gameId, reviewerId: reviewerId });
        if (review != null) {
            throw "You have already reviewed this game"
        }
    },

    async updateReview(reviewerId, gameId, Title, description, rating, dateOfReview) {
        if (!validation.validString(reviewerId)) throw 'Reviewer id is not a valid string.';

        if (!validation.validString(gameId)) throw 'Game id is not a valid string.';


        if (!validation.validString(Title)) throw 'title text is not a valid string.';

        if (!validation.validString(description)) throw 'description text is not a valid string.';

        if (!validation.validString(rating)) throw 'rating text is not a valid format.';

        if (!validation.validString(dateOfReview)) throw 'dateOfReview text is not a valid format.';
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

    async getAllReviewsBygameId(gameId) {
        if (!validation.validString(gameId)) throw 'Game id is not a valid string.';

        const reviewCollection = await reviews();
        const reviewList = await reviewCollection.find({ 'gameId': { $eq: gameId } }).toArray();
        for (let x of reviewList) {
            let user = await userData.getUserById(x.reviewerId);
            x._id = x._id.toString();
            x.user_name = user.firstName + " " + user.lastName;
        }
        return reviewList;
    },

    async checkLikeReview(reviewId, userId) {
        //validation remaining

        let review = (await this.getReviewById(reviewId));
        if (review === null) throw 'No review found with that id.';
        if (review.likes.includes(userId)) {
            return true;
        }
        else {
            return false;
        }
    },

    async AddRemoveLikeReview(reviewId, userId) {
        //validation remaining

        let review = (await this.getReviewById(reviewId));
        if (review === null) throw 'No review found with that id.';
        if (review.likes.includes(userId)) {
            let updateReview = {
                likes: userId
            };
            const reviewCollection = await reviews();
            const updatedInfo = await reviewCollection.updateOne({ _id: ObjectId(reviewId) }, { $pull: updateReview });
            if (updatedInfo.modifiedCount === 0) throw 'Could not  unliked your review successfully.';
            return true;

        }
        else {
            let updateReview = {
                likes: userId,
            };
            let removedislike = {
                dislikes: userId
            }
            const reviewCollection = await reviews();
            const updatedInfo = await reviewCollection.updateOne({ _id: ObjectId(reviewId) }, { $push: updateReview, $pull: removedislike });
            if (updatedInfo.modifiedCount === 0) throw 'Could not  liked your review successfully.';
            return true;

        }
    },
    async checkdislikeLikeReview(reviewId, userId) {
        //validation remaining

        let review = (await this.getReviewById(reviewId));
        if (review === null) throw 'No review found with that id.';
        if (review.dislikes.includes(userId)) {
            return true;
        }
        else {
            return false;
        }
    },
    async AddRemoveDislikeReview(reviewId, userId) {
        //validation remaining

        let review = (await this.getReviewById(reviewId));
        if (review === null) throw 'No review found with that id.';
        if (review.dislikes.includes(userId)) {
            let updateReview = {
                dislikes: userId
            };
            const reviewCollection = await reviews();
            const updatedInfo = await reviewCollection.updateOne({ _id: ObjectId(reviewId) }, { $pull: updateReview });
            if (updatedInfo.modifiedCount === 0) throw 'Could not  unliked your review successfully.';
            return true;

        }
        else {
            let updateReview = {
                dislikes: userId,
            };
            let removelike = {
                likes: userId
            }
            const reviewCollection = await reviews();
            const updatedInfo = await reviewCollection.updateOne({ _id: ObjectId(reviewId) }, { $push: updateReview, $pull: removelike });
            if (updatedInfo.modifiedCount === 0) throw 'Could not  disliked your review successfully.';
            return true;

        }
    },

    async getReviewByUserId(userId) {
        const reviewCollection = await reviews();
        let allReveiws = await reviewCollection.find({ reviewerId: userId }).toArray();
        for (let x of allReveiws) {
            const actionCollection = await action();
            let actionOne = await actionCollection.findOne({ _id: ObjectId(x.gameId.trim()) });
            const puzzleCollection = await puzzle();
            let puzzleOne = await puzzleCollection.findOne({ _id: ObjectId(x.gameId.trim()) });
            const racingCollection = await racing();
            let racingOne = await racingCollection.findOne({ _id: ObjectId(x.gameId.trim()) });
            const sportsCollection = await sports();
            let sportsOne = await sportsCollection.findOne({ _id: ObjectId(x.gameId.trim()) });
            const strategyCollection = await strategy();
            let strategyOne = await strategyCollection.findOne({ _id: ObjectId(x.gameId.trim()) });
            x._id = x._id.toString();
            if (puzzleOne) {
                x.puzzleName = puzzleOne.name;
            } else if (actionOne) {
                x.actionName = actionOne.name;
            } else if (racingOne) {
                x.racingName = racingOne.name;
            } else if (sportsOne) {
                x.sportsName = sportsOne.name;
            } else if (strategyOne) {
                x.strategyName = strategyOne.name;
            }
        }

        return allReveiws;

    },

    async deleteReview(reviewId) {
        //validation remaining
        let gameId = "";
        let review = await this.getReviewById(reviewId);
        if (review === null) throw 'No review found with that id.';
        gameId = review.gameId
        const reviewCollection = await reviews();
        const updatedInfo = await reviewCollection.deleteOne({ _id: ObjectId(reviewId) });
        let allReviews = await this.getAllReviewsBygameId(gameId);
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

        let puzzleOne = await puzzleData.getPuzzleById(gameId);
        let actionOne = await actionData.getActionById(gameId);
        let racingOne = await racingData.getRacingById(gameId);
        let sportsOne = await sportsData.getSportsById(gameId);
        let strategyOne = await strategyData.getStrategyById(gameId);

        if (puzzleOne) {
            await puzzleData.removeReviewIds(gameId, reviewId, avg);
        } else if (actionOne) {
            await actionData.removeReviewIds(gameId, reviewId, avg);
        } else if (racingOne) {
            await racingData.removeReviewIds(gameId, reviewId, avg);
        } else if (sportsOne) {
            await sportsData.removeReviewIds(gameId, reviewId, avg);
        } else if (strategyOne) {
            await strategyData.removeReviewIds(gameId, reviewId, avg);
        } else {
            return false;
        }

        return true;
    }

}
