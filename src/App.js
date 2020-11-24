import React, { Component } from 'react'
import './App.css';
import Form from './components/form/Form';
import { Container, Typography } from '@material-ui/core'
import 'fontsource-roboto'

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm" align="center">
        <Typography variant="h3" component="h1">Form</Typography>
        <Form></Form>
      </Container>
    );
  }
}

export default App;
