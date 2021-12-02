import React from 'react';
import Container from '@mui/material/Container';
import Filter from './Filter';
import Recipes from './Recipes'
import './Main.css';


function Main() {
  return (
    <Container className="main_container" maxWidth="xl" fixed={true} >
      <Filter />
      <Recipes />
    </Container>
  );
}

export default Main;
