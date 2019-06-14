const Validator = require('validator');
const isEmpty = require('is-empty');
const User = require('../database/models/User');

const register = (req, res) => {
  const errors = {};
  const { body } = req;
  let { name, email, password, password2 } = body;

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

// const signUp = (req, res) => {
//   // get the body content from frontend request
//   const { body } = req;
//   const { password } = body;
//   let { email, name } = body;

//   // make sure the request includes an email and password
//   if (!email) {
//     return res.send({
//       success: false,
//       message: 'Error: Email cannot be blank.',
//     });
//   }

//   if (!password) {
//     return res.send({
//       success: false,
//       message: 'Error: Password cannot be blank.',
//     });
//   }

//   if (!name) {
//     return res.send({
//       success: false,
//       message: 'Error: Name cannot be blank.',
//     });
//   }
//   // ensure all emails are stored the same in database
//   email = email.toLowerCase();
//   email = email.trim();

//   // removes whitespace from name
//   name = name.trim();

//   // finds searches for email in User table in database
//   return User.find(
//     {
//       email,
//     },
//     (err, previousUsers) => {
//       if (err) {
//         return res.send({
//           success: false,
//           message: 'Error: Server error.',
//         });
//       }
//       // checks to see if user already exists
//       if (previousUsers.length > 0) {
//         return res.send({
//           success: false,
//           message: 'Error: Account already exists.',
//         });
//       }

//       // If the user doesn't already exist, save the user
//       const newUser = new User();
//       newUser.email = email;
//       newUser.name = name;
//       newUser.password = newUser.generateHash(password);
//       return newUser.save((error, user) => {
//         // will use user later
//         if (error) {
//           return res.send({
//             success: false,
//             message: 'Error: Server error',
//           });
//         }
//         return res.send({
//           success: true,
//           message: 'Signed up',
//         });
//       });
//     }
//   );
// };

module.exports = { register };
