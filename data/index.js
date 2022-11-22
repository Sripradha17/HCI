const userData = require('./users');
const hotelData= require('./hotels');
const puzzleData= require('./puzzle');
const actionData= require('./action');
const racingData= require('./racing');
const sportsData= require('./sports');
const strategyData = require('./strategy')
const reviewData= require('./reviews');
module.exports = {
    hotels: hotelData,
    puzzle: puzzleData,
    action: actionData,
    racing: racingData,
    sports: sportsData,
    strategy: strategyData,
    users:userData,
    reviews:reviewData
};