import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Filter from './Filter';
import Recipes from './Recipes';
import './Main.css';

function Main() {
  const [recipesData, setRecipesData] = useState([]);

  const getAllRecipes = async () => {
    const reqSettings = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      mode: 'cors',
      body: JSON.stringify({
        query: `{ Recipes { id, title, ingredients } }`,
        variables: {}
      })
    };
    const response = await fetch('http://localhost:4000/graphql', reqSettings);
    const jsonResponse = await response.json();
    return jsonResponse.data.Recipes;
  };

  useEffect(async () => {
    setRecipesData(await getAllRecipes());
  }, []);

  return (
    <Container className="main_container" maxWidth="xl" fixed={true} >
      <Filter />
      <Recipes recipesData={recipesData} />
    </Container>
  );
}

export default Main;
