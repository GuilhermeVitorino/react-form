import { TextField, Button } from '@material-ui/core';
import React, { useState } from 'react';

function AddressData({ onSubmitForm }) {

  const [cep, setCep] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmitForm({ cep, address, number, state, city });
      }}
    >

      <TextField
        value={cep}

        onChange={(e) => {
          setCep(e.target.value);
        }}

        id="cep"
        label="ZIP Code"
        type="number"
        variant="outlined"
        margin="normal"
      />
      <TextField
        value={address}

        onChange={(e) => {
          setAddress(e.target.value);
        }}

        id="address"
        label="Address"
        type="text"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={number}

        onChange={(e) => {
          setNumber(e.target.value);
        }}

        id="number"
        label="Number"
        type="number"
        variant="outlined"
        margin="normal"
      />
      <TextField
        value={state}

        onChange={(e) => {
          setState(e.target.value);
        }}

        id="state"
        label="State"
        type="text"
        variant="outlined"
        margin="normal"
      />
      <TextField
        value={city}

        onChange={(e) => {
          setCity(e.target.value);
        }}

        id="city"
        label="City"
        type="text"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth>
        Finish Register
      </Button>
    </form>
  );
}

export default AddressData;