const fetch = require('node-fetch');
const API_URL = 'https://api.edamam.com/search';
const API_ID = process.env.API_ID;
const API_KEY_RECIPE = process.env.API_KEY_RECIPE;

function findRecipe(req, res, next) {
  fetch(`${API_URL}search?q=vegan&app_id=${APP_ID}&app_key=${APP_KEY_RECIPE}`)
  .then(r => r.json())
  .then(recipes) => {
    console.log(recipes.data);
    res.recipe = recipes.data;
    console.log(res.recipe);
    next();
  })
  .catch((err) => {
    res.err = err;
    next();
  })
}

module.exports = { findRecipe };
