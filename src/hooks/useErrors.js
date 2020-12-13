import React, { useState } from 'react';

function useErrors(validations) {

  const initialState = createInitialState(validations);

  const [errors, setErrors] = useState(initialState);

  function validateFields(e) {
    const { name, value } = e.target;
    const newState = { ...errors }
    newState[name] = validations[name](value);
    setErrors(newState);
  }

  function cansubmit() {
    for (let field in errors) {
      if (!errors[field].valid)
        return false;
    }

    return true;
  }

  return [errors, validateFields, cansubmit]

}

function createInitialState(validations) {

  const intialState = {}

  for (let field in validations) {
    intialState[field] = { valid: true, text: "" }
  }

  return intialState;

}

export default useErrors;