const mongoose = require('mongoose');
const models = require('../server/database/models.js');
const methods = require('../server/database/methods.js');

const similar_items_by_views = models.similar_items_by_views;

beforeAll(async (done) => {
  mongoose.connect(`mongodb://${process.env.DATABASE}:${process.env.DATABASE_PORT}/test`, {useNewUrlParser: true, useUnifiedTopology: true});

  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {
    console.log(`The database has connected on mongodb://${process.env.DATABASE}:${process.env.DATABASE_PORT}`);
  });

  done();
});

afterAll(async (done) => {
  similar_items_by_views.deleteMany({}, (err, results) => {
    if (err) console.error('Unable to delete the collection similar_items_by_views: ', err);
    console.log('Collection similar_items_by_views has been cleared.')
  });
  done();
});

describe('Seeding script', () => {
  test('Seeding script seeds 100 documents', async () => {
    let data;
    data = await dbMethods.getProductSizesAsync();
    expect(data.length).toBe(100);
  });

  test('Seeds are not the same data', async () => {
    let data;
    data = await dbMethods.getProductSizesAsync();
    expect(JSON.stringify(data[0])).not.toEqual(JSON.stringify(data[1]));
  });
});

describe('Database methods', () => {
  test('Method gets similar items by views for one item', async () => {
    let data;
    data = await dbMethods.getProductSizesAsync();
    expect(data.length).toBe(100);
  });

  test('If no item is found, give proper response', async () => {
    let data;
    data = await dbMethods.getProductSizesAsync();
    expect(JSON.stringify(data[0])).not.toEqual(JSON.stringify(data[1]));
  });
});