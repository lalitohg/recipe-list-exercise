import React from 'react';
import Grid from '@mui/material/Grid'
import Recipe from './Recipe';

function Recipes({recipesData}) {
    const mapRecipesData = recipes => {
        return recipes.map(recipe => <Recipe id={recipe.id} title={recipe.title} ingredients={recipe.ingredients} />);
    };

    return (
        <Grid container spacing={1}>
            { mapRecipesData(recipesData) }
        </Grid>
    );
}

export default Recipes;
