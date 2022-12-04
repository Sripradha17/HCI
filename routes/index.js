const userRoutes = require('./users');
const reviewRoutes = require('./reviews');
const puzzleRoutes = require('./puzzle');
const actionRoutes = require('./action');
const racingRoutes = require('./racing');
const sportsRoutes = require('./sports');
const strategyRoutes = require('./strategy');


const constructorMethod = (app) => {
    app.use('/reviews', reviewRoutes);
    app.use('/', userRoutes);
    app.use('/puzzle', puzzleRoutes);
    app.use('/action', actionRoutes);
    app.use('/racing', racingRoutes);
    app.use('/sports', sportsRoutes);
    app.use('/strategy', strategyRoutes);
    app.use('*', (req, res) => {
        res.sendStatus(404);
    });
}


module.exports = constructorMethod;