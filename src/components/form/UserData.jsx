import { Button, TextField } from '@material-ui/core';
import React, { useState, useContext } from 'react';
import FormValidations from '../../contexts/FormValidations';
import userErrors from '../../hooks/useErrors';

function Userdata({ onSubmitForm }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const validations = useContext(FormValidations);
  const [errors, validateFields, cansubmit] = userErrors(validations);

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