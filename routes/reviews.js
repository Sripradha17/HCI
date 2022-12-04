const express = require('express');
const app = express();
const static = express.static(__dirname + '/public');
const router = express.Router();
const data = require('../data');
const reviewsData = data.reviews;
const puzzleData =data.puzzle;
const actionData =data.action;
const racingData = data.racing;
const strategyData =data.strategy;
const sportsData = data.sports;
const xss = require('xss')
const validation = require('../data/validation');
const { reviews } = require('../config/mongoCollections');

router.post('/puzzle/:id', async (req, res) => {
	let data = {};
	if (!req.session.user) {
		data.success = false;
		data.msg = "You can not add review without logged in";
		return res.json(data);
	}
	const puzzlelId = xss(req.params.id.trim());
	const title = xss(req.body.Title.trim());
	const description = xss(req.body.description.trim());
	const rating = xss(req.body.rating.trim());


	try {
		if (!await validation.validString(title)) {
			data.success = false;
			data.msg = "Title must be a valid string";
			return res.json(data);
		}
	} catch (error) {
		data.success = false;
		data.msg = error;
		return res.json(data);
	}
	try {
		if (!await validation.validString(description)) {
			data.success = false;
			data.msg = "Description must be a valid string";
			return res.json(data);
		}
	} catch (error) {
		data.success = false;
		data.msg = error;
		return res.json(data);
	}
	try {
		await validation.checkrating(rating);
	} catch (error) {
		data.success = false;
		data.msg = error;
		return res.json(data);
	}

	let puzzleOne = await puzzleData.getPuzzleById(puzzlelId);
	if (puzzleOne === null) {
		data.success = false;
		data.msg = "Puzzle game does not exist";
		return res.json(data);
	}
	try {
		let date = new Date();
		let month = date.getMonth() + 1;//months (0-11)
		let day = date.getDate();//day (1-31)
		let year = date.getFullYear();
		let formattedDate = month + "/" + day + "/" + year;

		let responseData = await reviewsData.createReview(req.session.user._id, puzzlelId, title, description, rating, formattedDate);
		if (responseData) {
			data.success = true;
			data.msg = "Thank you for your review.";
			return res.json(data);
		}
	}
	catch (error) {
		data.success = false;
		data.msg = error;
		return res.json(data);
	};
});

router.post('/action/:id', async (req, res) => {
	let data = {};
	if (!req.session.user) {
		data.success = false;
		data.msg = "You can not add review without logged in";
		return res.json(data);
	}
	const actionlId = xss(req.params.id.trim());
	const title = xss(req.body.Title.trim());
	const description = xss(req.body.description.trim());
	const rating = xss(req.body.rating.trim());


	try {
		if (!await validation.validString(title)) {
			data.success = false;
			data.msg = "Title must be a valid string";
			return res.json(data);
		}
	} catch (error) {
		data.success = false;
		data.msg = error;
		return res.json(data);
	}
	try {
		if (!await validation.validString(description)) {
			data.success = false;
			data.msg = "Description must be a valid string";
			return res.json(data);
		}
	} catch (error) {
		data.success = false;
		data.msg = error;
		return res.json(data);
	}
	try {
		await validation.checkrating(rating);
	} catch (error) {
		data.success = false;
		data.msg = error;
		return res.json(data);
	}

	let actionOne = await actionData.getActionById(actionlId);
	if (actionOne === null) {
		data.success = false;
		data.msg = "Action game does not exist";
		return res.json(data);
	}
	try {
		let date = new Date();
		let month = date.getMonth() + 1;//months (0-11)
		let day = date.getDate();//day (1-31)
		let year = date.getFullYear();
		let formattedDate = month + "/" + day + "/" + year;

		let responseData = await reviewsData.createReview(req.session.user._id, actionlId, title, description, rating, formattedDate);
		if (responseData) {
			data.success = true;
			data.msg = "Thank you for your review.";
			return res.json(data);
		}
	}
	catch (error) {
		data.success = false;
		data.msg = error;
		return res.json(data);
	};
});

router.post('/racing/:id', async (req, res) => {
	let data = {};
	if (!req.session.user) {
		data.success = false;
		data.msg = "You can not add review without logged in";
		return res.json(data);
	}
	const racinglId = xss(req.params.id.trim());
	const title = xss(req.body.Title.trim());
	const description = xss(req.body.description.trim());
	const rating = xss(req.body.rating.trim());


	try {
		if (!await validation.validString(title)) {
			data.success = false;
			data.msg = "Title must be a valid string";
			return res.json(data);
		}
	} catch (error) {
		data.success = false;
		data.msg = error;
		return res.json(data);
	}
	try {
		if (!await validation.validString(description)) {
			data.success = false;
			data.msg = "Description must be a valid string";
			return res.json(data);
		}
	} catch (error) {
		data.success = false;
		data.msg = error;
		return res.json(data);
	}
	try {
		await validation.checkrating(rating);
	} catch (error) {
		data.success = false;
		data.msg = error;
		return res.json(data);
	}

	let racingOne = await racingData.getRacingById(racinglId);
	if (racingOne === null) {
		data.success = false;
		data.msg = "Racing game does not exist";
		return res.json(data);
	}
	try {
		let date = new Date();
		let month = date.getMonth() + 1;//months (0-11)
		let day = date.getDate();//day (1-31)
		let year = date.getFullYear();
		let formattedDate = month + "/" + day + "/" + year;

		let responseData = await reviewsData.createReview(req.session.user._id, racinglId, title, description, rating, formattedDate);
		if (responseData) {
			data.success = true;
			data.msg = "Thank you for your review.";
			return res.json(data);
		}
	}
	catch (error) {
		data.success = false;
		data.msg = error;
		return res.json(data);
	};
});

router.post('/sports/:id', async (req, res) => {
	let data = {};
	if (!req.session.user) {
		data.success = false;
		data.msg = "You can not add review without logged in";
		return res.json(data);
	}
	const sportslId = xss(req.params.id.trim());
	const title = xss(req.body.Title.trim());
	const description = xss(req.body.description.trim());
	const rating = xss(req.body.rating.trim());


	try {
		if (!await validation.validString(title)) {
			data.success = false;
			data.msg = "Title must be a valid string";
			return res.json(data);
		}
	} catch (error) {
		data.success = false;
		data.msg = error;
		return res.json(data);
	}
	try {
		if (!await validation.validString(description)) {
			data.success = false;
			data.msg = "Description must be a valid string";
			return res.json(data);
		}
	} catch (error) {
		data.success = false;
		data.msg = error;
		return res.json(data);
	}
	try {
		await validation.checkrating(rating);
	} catch (error) {
		data.success = false;
		data.msg = error;
		return res.json(data);
	}

	let sportsOne = await sportsData.getSportsById(sportslId);
	if (sportsOne === null) {
		data.success = false;
		data.msg = "Sports game does not exist";
		return res.json(data);
	}
	try {
		let date = new Date();
		let month = date.getMonth() + 1;//months (0-11)
		let day = date.getDate();//day (1-31)
		let year = date.getFullYear();
		let formattedDate = month + "/" + day + "/" + year;

		let responseData = await reviewsData.createReview(req.session.user._id, sportslId, title, description, rating, formattedDate);
		if (responseData) {
			data.success = true;
			data.msg = "Thank you for your review.";
			return res.json(data);
		}
	}
	catch (error) {
		data.success = false;
		data.msg = error;
		return res.json(data);
	};
});

router.post('/strategy/:id', async (req, res) => {
	let data = {};
	if (!req.session.user) {
		data.success = false;
		data.msg = "You can not add review without logged in";
		return res.json(data);
	}
	const strategylId = xss(req.params.id.trim());
	const title = xss(req.body.Title.trim());
	const description = xss(req.body.description.trim());
	const rating = xss(req.body.rating.trim());


	try {
		if (!await validation.validString(title)) {
			data.success = false;
			data.msg = "Title must be a valid string";
			return res.json(data);
		}
	} catch (error) {
		data.success = false;
		data.msg = error;
		return res.json(data);
	}
	try {
		if (!await validation.validString(description)) {
			data.success = false;
			data.msg = "Description must be a valid string";
			return res.json(data);
		}
	} catch (error) {
		data.success = false;
		data.msg = error;
		return res.json(data);
	}
	try {
		await validation.checkrating(rating);
	} catch (error) {
		data.success = false;
		data.msg = error;
		return res.json(data);
	}

	let strategyOne = await strategyData.getStrategyById(strategylId);
	if (strategyOne === null) {
		data.success = false;
		data.msg = "Strategy game does not exist";
		return res.json(data);
	}
	try {
		let date = new Date();
		let month = date.getMonth() + 1;//months (0-11)
		let day = date.getDate();//day (1-31)
		let year = date.getFullYear();
		let formattedDate = month + "/" + day + "/" + year;

		let responseData = await reviewsData.createReview(req.session.user._id, strategylId, title, description, rating, formattedDate);
		if (responseData) {
			data.success = true;
			data.msg = "Thank you for your review.";
			return res.json(data);
		}
	}
	catch (error) {
		data.success = false;
		data.msg = error;
		return res.json(data);
	};
});

router.get('/like/:id', async (req, res) => {
	let id = xss(req.params.id.trim());
	let review = undefined;
	let data = {};
	if (id === '') {
		data.success = false;
		data.msg = "Review id not valid";
		return res.json(data);
	}
	if (!req.session.user) {
		data.success = false;
		data.msg = "Log in to like review";
		return res.json(data);
	}
	try {
		review = await reviewsData.getReviewById(id);
		if (review === null) {
			data.success = false;
			data.msg = "Review does not exist";
			return res.json(data);
		}
		let fav = await reviewsData.checkLikeReview(id, req.session.user._id);
		let response = await reviewsData.AddRemoveLikeReview(id, req.session.user._id);
		if (response) {
			if (fav == false) {
				data.success = true;
				data.msg = "Successfully liked review";
				return res.json(data);

			}
			else {
				data.success = true;
				data.msg = "Successfully unliked review";
				return res.json(data);
			}
		}
	}
	catch (e) {
		data.success = false;
		data.msg = e;
		return res.json(data);
	}
});

router.get('/delete/:id', async (req, res) => {
	//validation check remaining
	if (!req.session.user) {
		return res.redirect("/login");
	}
	let id = xss(req.params.id.trim());
	let error = undefined;

	//validation check remaining
	try {
		const review = await reviewsData.getReviewById(id);
		if (review.reviewerId != req.session.user._id) {
			req.session.error_message = "Something going wrong"

		}
		const updateReview = await reviewsData.deleteReview(id);
		if (updateReview) {
			req.session.success_message = "Successfully deleted your review."
			return res.redirect("/myreview");

		}
		else {
			req.session.error_message = "Review can not be deleted. please try again.";
			return res.redirect("/myreview");
		}

	}
	catch (e) {
		error = e;
		req.session.error_message = e
		return res.redirect("/myreview");
	}


});

router.get('/dislike/:id', async (req, res) => {
	let id = xss(req.params.id.trim());
	let review = undefined;
	let data = {};
	if (id === '') {
		data.success = false;
		data.msg = "review id is not valid";
		return res.json(data);
	}
	if (!req.session.user) {
		data.success = false;
		data.msg = "you can not like review without logged in";
		return res.json(data);
	}
	try {
		review = await reviewsData.getReviewById(id);
		if (review === null) {
			data.success = false;
			data.msg = "Review does not exist";
			return res.json(data);
		}
		let fav = await reviewsData.checkdislikeLikeReview(id, req.session.user._id);
		let response = await reviewsData.AddRemoveDislikeReview(id, req.session.user._id);
		if (response) {
			if (fav == false) {
				data.success = true;
				data.msg = "Successfully disliked review";
				return res.json(data);

			}
			else {
				data.success = true;
				data.msg = "Successfully unliked review";
				return res.json(data);

			}

		}

	}
	catch (e) {
		data.success = false;
		data.msg = e;
		return res.json(data);

	}

});

module.exports = router;
