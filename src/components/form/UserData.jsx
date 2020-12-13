import { Button, TextField } from '@material-ui/core';
import React, { useState, useContext } from 'react';
import FormValidations from '../../contexts/FormValidations';

function Userdata({ onSubmitForm }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ password: { valid: true, text: "" } });

  const validations = useContext(FormValidations);

  function validateFields(e) {
    const { name, value } = e.target;
    const newState = { ...errors }
    newState[name] = validations[name](value);
    setErrors(newState);
  }

  function cansubmit() {
    for(let field in errors) {
      if(!errors[field].valid) 
        return false;
    }

    return true;
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if(cansubmit())
          onSubmitForm({ email, password });
      }}>
      <TextField

        onChange={(e) => {
          setEmail(e.target.value);
        }}

        id="email"
        name="email"
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

        onBlur={validateFields}

        id="password"
        name="password"
        label="Password"
        type="password"
        error={!errors.password.valid}
        helperText={errors.password.text}
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