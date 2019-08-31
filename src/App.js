import React from 'react';
import { Container, Button, Typography } from '@material-ui/core';
import './App.scss';

function App() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Library App
      </Typography>
      <Button variant="contained" color="primary">
        Hello World
      </Button>
    </Container>
  );
}

export default App;
