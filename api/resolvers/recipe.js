const isEmptyEngridentList = ingredients => {
    return (!ingredients || !ingredients.length);
}

const mapResultToType = (result) => {
    return result.body.hits.hits.map(hit => ({ id: hit._id, ...hit._source }));
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
    return mapResultToType(result);
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
    return mapResultToType(result);
}

const getRecipesByIngredients = async (esClient, ingredients) => {
    const result = await esClient.search({
        index: 'recipes',
        body: {
            query: {
                terms: {
                    ingredients
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
    // TODO - implement pagination, sorting and field exclusion
    const esClient = require('../db/clients/elasticsearch').getClient();

    if (!title && isEmptyEngridentList(ingredients)) {
        return await getAllRecipes(esClient);
    } else if (title) {
        return await getRecipesByTitle(esClient, title);
    } else if (ingredients.length) {
        return await getRecipesByIngredients(esClient, ingredients);
    } else {
        return await getAllRecipes(esClient);
    }
}

module.exports = {
    Recipe,
    recipes
}
