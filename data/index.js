const userData = require('./users');
const hotelData= require('./hotels');
const reviewData= require('./reviews');
module.exports = {
    hotels: hotelData,
    users:userData,
    reviews:reviewData
};