import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import './Filter.css';

function Filter() {
    const [searchFieldName, setSearchFieldName] = React.useState('title');

    const handleFieldNameChange = (event, newFieldName) => {}

    return (
        <Stack className="filter" direction="row" spacing={1}>
            <TextField id="search-term" label="Filter" variant="standard" aria-label="search term" />
            <ToggleButtonGroup
                value={searchFieldName}
                exclusive
                onChange={handleFieldNameChange}
                aria-label="search field name"
            >
                <ToggleButton value="title" aria-label="search in title">Title</ToggleButton>
                <ToggleButton value="ingredients" aria-label="search in ingredients">Ingredients</ToggleButton>
            </ToggleButtonGroup>
            <IconButton aria-label="search">
                <SearchIcon />
            </IconButton>
        </Stack>
    );
}

export default Filter