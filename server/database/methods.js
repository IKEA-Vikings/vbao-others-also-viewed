const Promise = require('bluebird');
const models = require('./models.js');

const getSimilarItemsByViews = Promise.promisify(
  (query, callback) => {
    models.similar_items_by_views.find({id: query}, (err, results) => {
      if (err) console.error(err);
      callback(null, results);
  });
});

module.exports = getSimilarItemsByViews;