const Promise = require('bluebird');
const models = require('./models.js');

const getSimilarItemsByViews = Promise.promisify(
  (query, callback) => {
    models.similar_items_by_views.find({id: query}, (err, results) => {
      if (err) return console.error(err);
      if (results.length === 0) return callback(null, 'No similar items by views found.');
      callback(null, results);
    });
  }
);

module.exports = getSimilarItemsByViews;