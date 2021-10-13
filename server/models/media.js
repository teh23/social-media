//TODO update type and filters
const mongoose = require('mongoose');

const mediaSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  source: {
    type: String,
  },
  preview: {
    type: String,
  },
  ratio: {
    type: String,
  },
});

const Media = mongoose.model('Media', mediaSchema);

module.exports = Media;
