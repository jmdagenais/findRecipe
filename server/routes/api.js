const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Recipe = mongoose.model('Recipe');

const recipeController = require('../controller/recipeController')(Recipe);

router.route('/recipes')
  .get(recipeController.getRecipes)
  .post(recipeController.createRecipe);


router.get('/tags', recipeController.listAllTags);

module.exports = router;
