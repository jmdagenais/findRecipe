let mongoose = require('mongoose');

let recipeModel = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  tags: [String]
});

exports.module = mongoose.model('Recipe', recipeModel);
