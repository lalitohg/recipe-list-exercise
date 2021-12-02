import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Filter from './Filter';
import Recipes from './Recipes';
import { allRecipesRequest, recipesByTitleRequest, recipesByIngredientsRequest } from '../common/recipesAPI';
import './Main.css';

function Main() {
  const [recipesData, setRecipesData] = useState([]);

  const getAllRecipes = async () => {
    return setRecipesData(await allRecipesRequest());
  };

  const getRecipesByTitle = async title => {
    return setRecipesData(await recipesByTitleRequest(title));
  };

  const getRecipesByIngredients = async ingredients => {
    return setRecipesData(await recipesByIngredientsRequest(ingredients));
  };

  useEffect(async () => {
    getAllRecipes();
  }, []);

  return (
    <Container className="main_container" maxWidth="xl" fixed={true} >
      <Filter getAllRecipes={getAllRecipes} getRecipesByTitle={getRecipesByTitle} getRecipesByIngredients={getRecipesByIngredients} />
      <Recipes recipesData={recipesData} />
    </Container>
  );
}

export default Main;
