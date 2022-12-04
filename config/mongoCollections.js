const dbConnection = require('./mongoConnection');

const getCollectionFn = (collection) => {
    let _col =  undefined;
    return async() => {
        if (!_col) {
            const db = await dbConnection();
            _col = await db.collection(collection);
        }
        return _col;
    };
};

module.exports = {
    puzzle: getCollectionFn('puzzle'),
    action: getCollectionFn('action'),
    racing: getCollectionFn('racing'),
    sports: getCollectionFn('sports'),
    strategy: getCollectionFn('strategy'),
    users: getCollectionFn('users'),
    reviews: getCollectionFn('reviews'),
}