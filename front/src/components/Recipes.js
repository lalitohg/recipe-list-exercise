import React from 'react';
import Grid from '@mui/material/Grid'
import Recipe from './Recipe';

function Recipes() {
    return (
        <Grid container spacing={1}>
            <Recipe></Recipe>
            <Recipe></Recipe>
            <Recipe></Recipe>
            <Recipe></Recipe>
            <Recipe></Recipe>
            <Recipe></Recipe>
            <Recipe></Recipe>
            <Recipe></Recipe>
        </Grid>
    );
}

export default Recipes;
