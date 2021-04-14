const mongoose = require('mongoose');

const OAVSchema = new mongoose.Schema({
  'id': Number,
  'similar_items': [Number]
});

const similar_items_by_views = mongoose.model('others_also_viewed', OAVSchema);

module.exports = {
  similar_items_by_views
};