import React from 'react';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import './Filter.css';

function Filter({ getAllRecipes, getRecipesByTitle, getRecipesByIngredients }) {
    const fieldNameVals = {
        title: 'title',
        ingredients: 'ingredients'
    };
    const [searchTerm, setSearchTerm] = React.useState('');
    const [searchFieldName, setSearchFieldName] = React.useState('title');

    const handleFieldNameChange = (event, newFieldName) => {
        setSearchFieldName(newFieldName);
    }

    const handleSearchTermChange = event => {
        setSearchTerm(event.target.value);
    }

    const handleSearchClick = () => {
        if (searchTerm) {
            (searchFieldName === fieldNameVals.title ? getRecipesByTitle(searchTerm) : getRecipesByIngredients(searchTerm.split(/\s*,\s*/)));
        } else {
            getAllRecipes();
        }
    }

    return (
        <Stack className="filter" direction="row" spacing={1}>
            <TextField
                id="search-term"
                label="Filter"
                variant="standard"
                aria-label="search term"
                onChange={handleSearchTermChange}
            />
            <ToggleButtonGroup
                value={searchFieldName}
                exclusive
                onChange={handleFieldNameChange}
                aria-label="search field name"
            >
                <ToggleButton value={fieldNameVals.title} aria-label="search in title">Title</ToggleButton>
                <ToggleButton value={fieldNameVals.ingredients} aria-label="search in ingredients">Ingredients</ToggleButton>
            </ToggleButtonGroup>
            <IconButton aria-label="search" onClick={handleSearchClick}>
                <SearchIcon />
            </IconButton>
        </Stack>
    );
}

export default Filter