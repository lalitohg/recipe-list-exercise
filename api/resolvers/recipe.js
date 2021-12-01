const isEmptyEngridentList = ingredients => {
    return (!ingredients || !ingredients.length);
}

const getAllRecipes = async () => {
    const esClient = require('../db/clients/elasticsearch').getClient();
    const result = await esClient.search({
        index: 'recipes',
        body: {
            query: {
                match_all: {}
            }
        }
    });
    return result.body.hits.hits.map(hit => ({id: hit._id, ...hit._source}));
}

const Recipe = {
    id: recipe => recipe.id,
    title: recipe => recipe.title,
    ingredients: recipe => recipe.ingredients
};

const recipes = async (parent, { title, ingredients, limit }) => {
    if (!title  && isEmptyEngridentList(ingredients)) {
        // TODO - implement pagination and sorting
        const result = await getAllRecipes();
        return result;
    }
    return []; // TODO - implement filtering
}

module.exports = {
    Recipe,
    recipes
}
