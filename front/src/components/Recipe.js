import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack'
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './Recipe.css';

function Recipe({id, title, ingredients}) {
    const mapIngredients = ingredients => {
        return ingredients.map((ingredient, index) => <Typography id={`${ingredient}_${index}`}>{ingredient}</Typography>);
    };

    return (
        <Grid id={id} item xs={12} sm={6} md={3}>
            <Card variant="outlined">
                <CardActionArea>
                    <CardContent className="recipe-content">
                        <Typography gutterBottom variant="h4" component="div">{title}</Typography>
                        <Typography gutterBottom variant="h5" component="div">Ingredients:</Typography>
                        <Stack direction="column" spacing={1}>
                            { mapIngredients(ingredients) }
                        </Stack>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    );
}

export default Recipe;
