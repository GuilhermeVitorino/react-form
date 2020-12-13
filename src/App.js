import React, { Component } from 'react'
import './App.css';
import Form from './components/form/Form';
import { Container, Typography } from '@material-ui/core'
import 'fontsource-roboto'
import { validateCPF, validatePassword } from './models/register'
import ValidationsForm from './contexts/FormValidations'
 
class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center">Form</Typography>
        <ValidationsForm.Provider
          value={{cpf:validateCPF, password:validatePassword}}
        >
          <Form onSubmitForm={onSubmitForm} ></Form>
        </ValidationsForm.Provider>
      </Container>
    );
  }
}

function onSubmitForm(data){
  console.log(data);
}

export default App;
