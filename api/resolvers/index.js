const recipeResolvers = require('./recipe');

module.exports = {
    Recipe: recipeResolvers.Recipe,
    Query: {
        Recipes: recipeResolvers.recipes
    }
}
