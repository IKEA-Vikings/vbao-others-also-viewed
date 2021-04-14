const mongoose = require('mongoose');
const generateSeedData = require('./seed_methods.js');
const db = require('./database.js');
const models = require('./models.js');
const similar_items_by_views = models.similar_items_by_views;

similar_items_by_views.deleteMany({}, (err, results) => {
  if (err) console.error('Unable to delete the collection similar_items_by_views: ', err);
  console.log('Collection similar_items_by_views has been cleared.')
});

let data = generateSeedData();
similar_items_by_views.insertMany(data, (err, results) => {
  if (err) console.error('Unable to insert data. Error: ', err);
  console.log(results);
});