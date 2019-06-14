const Validator = require('validator');
const isEmpty = require('is-empty');

const validateRegisterData = data => {
  const errors = {};
  let { name, email, password, password2 } = data;

  // this converts empty fields coming through into empty strings so that they can be validated
  name = !isEmpty(name) ? name : '';
  email = !isEmpty(email) ? email : '';
  password = !isEmpty(password) ? password : '';
  password2 = !isEmpty(password2) ? password2 : '';

  // Checks for name
  if (Validator.isEmpty(name)) {
    errors.name = 'Name field is required.';
  }

  // Checks for valid email
  if (Validator.isEmpty(email)) {
    errors.email = 'Email field is required';
  } else if (!Validator.isEmail(email)) {
    errors.email = 'Email is invalid.';
  }

  if (Validator.isEmpty(password)) {
    errors.password = 'Password field is required';
  }

  if (Validator.isEmpty(password2)) {
    errors.password = 'Confirm password field is required';
  }

  if (Validator.isLength(password, { min: 6, max: 30 })) {
    errors.password = 'Password must be between 6 & 30 characters';
  }

  if (!Validator.equals(password, password2)) {
    errors.password2 = 'Passwords much match.';
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};

module.exports = { validateRegisterData };
