/* eslint-disable no-underscore-dangle */
const Validator = require('validator');
const isEmpty = require('is-empty');

const validateGoal = data => {
  const errors = {};
  let { title, category, _id } = data;

  title = !isEmpty(title) ? title : '';
  category = !isEmpty(category) ? category : '';
  _id = !isEmpty(_id) ? _id : '';

  if (Validator.isEmpty(title)) {
    errors.title = 'Title field is required';
  }

  if (Validator.isEmpty(category)) {
    errors.category = 'Category field is required';
  }

  if (Validator.isEmpty(_id)) {
    errors._id = 'Please log in';
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};

module.exports = { validateGoal };
