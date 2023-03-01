const mongoose = require('mongoose');
const config = require('config');
const db = process.env.MONGODB_URI || config.get('mongoURI');

mongoose.connect(db, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true
})
    .then(()=>'MongoDB is connected')
    .catch(()=> console.log('NongoDB is not connected'))

module.exports = {
    Post: require('./Post')
};
