import { Button, TextField } from '@material-ui/core';
import React, { useState } from 'react';

function Userdata({onSubmitForm}) {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form
      onSubmit ={(e) => {
        e.preventDefault();
        onSubmitForm({email, password});
      }}>
      <TextField

        onChange={(e) => {
          setEmail(e.target.value);
        }}

        id="email"
        label="Email"
        type="email"
        required
        variant="outlined"
        margin="normal"
        fullWidth />
      <TextField

        onChange={(e) => {
          setPassword(e.target.value);
        }}

        id="password"
        label="Password"
        type="password"
        required
        variant="outlined"
        margin="normal"
        fullWidth
        required />
      <Button
        type="submit"
        variant="contained"
        color="primary">
          Register
        </Button>
    </form>
  );
}

export default Userdata;