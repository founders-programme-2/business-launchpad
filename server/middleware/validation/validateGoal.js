const Validator = require('validator');
const isEmpty = require('is-empty');

const validateGoal = data => {
  const errors = {};
  let { title, category } = data;

  title = !isEmpty(title) ? title : '';
  category = !isEmpty(category) ? category : '';

  if (Validator.isEmpty(title)) {
    errors.title = 'Title field is required';
  }

  if (Validator.isEmpty(category)) {
    errors.category = 'Category field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};

module.exports = { validateGoal };
