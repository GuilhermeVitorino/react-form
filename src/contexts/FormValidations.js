import React from 'react';

const FormValidations = React.createContext({
  cpf: noValidation,
  password: noValidation,
  name: noValidation
});

function noValidation(data) {
  console.log(data);
  return { valid: true, text: "" };
}

export default FormValidations;