function validateCPF(cpf){
  if (cpf.length != 11) {
    return {valid: false, text: 'The CPF must be have 11 digits!'}
  } else {
    return {valid: true}
  }
}

function validatePassword(password){
  if (password.length < 4 || password.length > 72) {
    return {valid: false, text: 'The password must be have between 8 and 72 digits!'}
  } else {
    return {valid: true}
  }
}

export { validateCPF, validatePassword }