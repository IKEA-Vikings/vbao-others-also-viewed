require('dotenv');
const mongoose = require('mongoose');
const Promise = require('bluebird');
const models = require('./models.js');

mongoose.connect(`mongodb://${process.env.DATABASE}:${process.env.DATABASE_PORT}/ikea`, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log(`The database has connected on mongodb://${process.env.DATABASE}:${process.env.DATABASE_PORT}`);
});

const getSimilarItemsByViews = Promise.promisify(
  (query, callback) => {
    models.similar_items_by_views.find({id: query}, (err, results) => {
      if (err) console.error(err);
      callback(null, results);
  });
});

module.exports = getSimilarItemsByViews;