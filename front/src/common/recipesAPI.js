const REQUEST_URL = 'http://localhost:4000/graphql?';

const reqSettings = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    mode: 'cors',
    body: {}
};

function getAllRecipesQuery() {
    return JSON.stringify({
        query: `{ Recipes { id, title, ingredients } }`,
        variables: {}
    });
}

function getRecipesByTitleQuery(title) {
    return JSON.stringify({
        query: `query($title: String) {
            Recipes(title:$title){
              id,
              title,
              ingredients
            }
          }`,
        variables: { title }
    });
}

function getRecipesByIngredientsQuery(ingredients) {
    return JSON.stringify({
        query: ``,
        variables: { ingredients }
    });
}


async function makeAPIRequest(body) {
    const response = await fetch(REQUEST_URL, { ...reqSettings, body });
    const jsonResponse = await response.json();
    return jsonResponse.data.Recipes;
}

async function allRecipesRequest() {
    return await makeAPIRequest(getAllRecipesQuery());
}

async function recipesByTitleRequest(title) {
    return await makeAPIRequest(getRecipesByTitleQuery(title));
}

async function recipesByIngredientsRequest(ingredients) {
    return await makeAPIRequest(getRecipesByIngredientsQuery(ingredients));
}

export {
    allRecipesRequest,
    recipesByTitleRequest,
    recipesByIngredientsRequest
}
