import React, { useState } from 'react';
import { Button, TextField, Switch, FormControlLabel } from '@material-ui/core';

function Form({onSubmitForm}) {

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [cpf, setCpf] = useState("");
  const [sales, setSales] = useState(true);
  const [news, setNews] = useState(true);

  return (
  
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmitForm({name, lastName, cpf, sales, news});
      }}
    >

      <TextField
        value={name}
        
        onChange={(e) => {
          setName(e.target.value);
        }}

        id="name"
        label="Name" 
        variant="outlined"
        margin="normal"
        fullWidth
      />
      
      <TextField
        value={lastName}
        
        onChange={(e) => {
          setLastName(e.target.value);
        }}

        id="lastName"
        label="Last Name"
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <TextField
        value={cpf}
        
        onChange={(e) => {
          setCpf(e.target.value);
        }}

        id="cpf"
        label="CPF"
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <FormControlLabel
        checked={sales}
        label="Sales"
        control={<Switch
          name="Sales"
          color="primary"
          onChange={ e => setSales(e.target.checked) } />}
      />

      <FormControlLabel
        checked={news}
        label="News"
        control={<Switch
          name="News"
          color="primary"
          onChange={ e => setNews(e.target.checked) } />}
      />

      <Button
        type="submit"
        variant="contained"
        color="primary">Register</Button>
    
    </form>
  );
}

export default Form;