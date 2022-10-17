const adminRoutes = require('./admin');
const hotelRoutes = require('./hotels');
const userRoutes = require('./users');
const reviewRoutes = require('./reviews');

const constructorMethod = (app) => {
    app.use('/admin', adminRoutes);
    app.use('/hotels', hotelRoutes);
    app.use('/reviews', reviewRoutes);
    app.use('/', userRoutes);
    app.use('*', (req, res) => {
        res.sendStatus(404);
    });
}


module.exports = constructorMethod;