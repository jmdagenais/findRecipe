const _ = require('lodash');

function recipeController(Recipe){

  let listAllTags = (req, res) => {
    // let tags = ['Pates', 'Poulet', 'Poisson', 'Saumon', 'Crevettes', 'Boeuf', 'Porc', 'Dessert', 'Chocolat', 'Fruit'].sort();
    Recipe.find({}, 'tags', function(err, tags) {
      tags = _(tags).map((tag) => {
        return tag.tags;
      })
        .flatten()
        .uniq()
        .sort();

      res.json(tags);
    });


    // res.json(tags);
  };

  let getRecipes = (req, res) => {
    if(req.query.tags){
      console.log('request tags: ', req.query.tags);
      getRecipesByTag(req.query.tags, res)
    } else {
      getAllRecipes(res);
    }
  };

  function getRecipesByTag(tags, res){
    Recipe.find({tags: {$all:tags} })
      .then((recipes) => {
        res.json(recipes);
      })
  }

  function getAllRecipes(res) {
    Recipe.find()
      .then((recipes) => {
        res.json(recipes);
      })
      .catch((err) => {
        res.status(500);
        res.send(err);
      })
  }

  let createRecipe = (req, res) => {
    let newRecipe = new Recipe(req.body);
    newRecipe.save()
      .then((value) => {
        res.sendStatus(201);
      })
      .catch((err) => {
        res.status(500);
        res.send(err);
      })
  };

  return {
    listAllTags: listAllTags,
    getRecipes: getRecipes,
    createRecipe: createRecipe
  }
}

module.exports = recipeController;
