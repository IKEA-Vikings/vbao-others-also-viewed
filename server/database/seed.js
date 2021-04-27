const mongoose = require('mongoose');
const generateSeedData = require('./seed_methods.js');
const db = require('./database.js');
const models = require('./models.js');
const similar_items_by_views = models.similar_items_by_views;

const seed = async () => {
  await similar_items_by_views.deleteMany({}, (err, results) => {
    if (err) return console.error('Unable to delete the collection similar_items_by_views: ', err);
    console.log('Collection similar_items_by_views has been cleared.')
  });

  let data = generateSeedData();
  await similar_items_by_views.insertMany(data, (err, results) => {
    if (err) return console.error('Unable to insert data. Error: ', err);
    console.log('Successfully seeded database.');
  });
};

seed();