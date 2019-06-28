const Validator = require('validator');
const isEmpty = require('is-empty');

const validateLogin = data => {
  const errors = {};
  let { email, password } = data;

  // converts empty fields to strings so that validator works
  email = !isEmpty(email) ? email : '';
  password = !isEmpty(password) ? password : '';

  if (Validator.isEmpty(email)) {
    errors.email = 'Email field is required. ';
  } else if (!Validator.isEmail(email)) {
    errors.email = 'Email is invalid. ';
  }

  if (Validator.isEmpty(password)) {
    errors.password = 'Password field is required. ';
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};

module.exports = { validateLogin };
