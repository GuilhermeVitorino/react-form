import React from 'react';
import { Button, TextField, Switch, FormControlLabel } from '@material-ui/core';

function Form() {
  return (<form>
    <TextField 
      id="name"
      label="Name" 
      variant="outlined"
      margin="normal"
      fullWidth
    />
    
    <TextField
      id="lastName"
      label="Last Name"
      variant="outlined"
      margin="normal"
      fullWidth
    />

    <TextField
      id="cpf"
      label="CPF"
      variant="outlined"
      margin="normal"
      fullWidth
    />

    <FormControlLabel
      label="Sales"
      control={<Switch name="Sales" defaultChecked color="primary" />}
    />

    <FormControlLabel
      label="News"
      control={<Switch name="News" defaultChecked color="primary" />}
    />

    <Button
      type="submit"
      variant="contained"
      color="primary">Register</Button>
  
  </form>);
}

export default Form;