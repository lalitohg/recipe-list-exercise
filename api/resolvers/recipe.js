const isEmptyEngridentList = ingredients => {
    return (!ingredients || !ingredients.length);
}

const getAllRecipes = async (esClient) => {
    const result = await esClient.search({
        index: 'recipes',
        body: {
            query: {
                match_all: {}
            }
        }
    });
    return result.body.hits.hits.map(hit => ({ id: hit._id, ...hit._source }));
}

const getRecipesByTitle = async (esClient, title) => {
    const result = await esClient.search({
        index: 'recipes',
        body: {
            query: {
                match: {
                    title
                }
            }
        }
    });
    return result.body.hits.hits.map(hit => ({ id: hit._id, ...hit._source }));
}

const Recipe = {
    id: recipe => recipe.id,
    title: recipe => recipe.title,
    ingredients: recipe => recipe.ingredients
};

const recipes = async (parent, { title, ingredients, limit }) => {
    // TODO - implement pagination and sorting
    const esClient = require('../db/clients/elasticsearch').getClient();

    if (!title && isEmptyEngridentList(ingredients)) {
        return await getAllRecipes(esClient);
    } else if (title) {
        return await getRecipesByTitle(esClient, title);
    }

    return []; // TODO - implement filtering
}

module.exports = {
    Recipe,
    recipes
}
