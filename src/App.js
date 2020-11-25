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
        <Form onSubmitForm={onSubmitForm} validateCPF={validateCPF} ></Form>
      </Container>
    );
  }
}

function onSubmitForm(data){
  console.log(data);
}

function validateCPF(cpf){
  if (cpf.length != 11) {
    return {valid: false, text: 'CPF mus be have 11 digits!'}
  } else {
    return {valid: true}
  }
}

export default App;
