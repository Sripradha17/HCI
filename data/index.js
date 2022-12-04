const userData = require('./users');
const puzzleData= require('./puzzle');
const actionData= require('./action');
const racingData= require('./racing');
const sportsData= require('./sports');
const strategyData = require('./strategy')
const reviewData= require('./reviews');
module.exports = {
    puzzle: puzzleData,
    action: actionData,
    racing: racingData,
    sports: sportsData,
    strategy: strategyData,
    users:userData,
    reviews:reviewData
};