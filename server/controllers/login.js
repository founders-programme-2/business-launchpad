const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../database/models/User');
const { validateLogin } = require('../middleware/validation/validateLogin');

const login = (req, res) => {
  // form validation
  const { errors, isValid } = validateLogin(req.body);
  const secret = process.env.secretOrKey;

  if (!isValid) {
    return res.status(400).send(errors);
  }

  const { email, password } = req.body;

  User.findOne({ email }).then(user => {
    if (!user) {
      return res.status(400).send({
        success: false,
        message: 'User not found. Please sign up.',
      });
    }

    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // create JTW payload
        const payload = {
          id: user.id,
          name: user.name,
        };

        // sign token, expires in 1 year in seconds
        jwt.sign(payload, secret, { expiresIn: 31556926 }, (err, token) => {
          res.send({
            success: true,
            token: `Bearer${token}`,
          });
        });
      } else {
        return res.status(400).send({
          success: false,
          message: 'Sorry, password is incorrect.',
        });
      }
    });
  });
};

module.exports = { login };

// const login = (req, res) => {
//   // will use next later

//   // get the body content from frontend request
//   const { body } = req;
//   const { password } = body;
//   let { email } = body;

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
//       message: 'Error: password cannot be blank',
//     });
//   }

//   // set email to lowercase and trim whitespace before it goes into db
//   email = email.toLowerCase();
//   email = email.trim();

//   // searches user table by email
//   return User.find(
//     {
//       email,
//     },
//     (err, users) => {
//       if (err) {
//         // console.log('server err', err);
//         return res.send({
//           success: false,
//           message: 'Error: server error',
//         });
//       }
//       // if email doesn't exist, send an error
//       if (users.length !== 1) {
//         return res.send({
//           success: false,
//           message: 'Error: Invalid, no user',
//         });
//       }
//       /* if user exists, encrypt the entered password using .validPassword
//       function defined in the model and compare it with the stored password.
//       if it's the same, create a new user session, save the session and return
//       the document id from the new user sessionStorage */
//       const user = users[0];
//       if (!user.validPassword(password)) {
//         return res.send({
//           success: false,
//           message: 'Error: invalid password',
//         });
//       }
//       const userSession = new UserSession();
//       // eslint-disable-next-line no-underscore-dangle
//       userSession.userId = user._id;
//       return userSession.save((error, doc) => {
//         if (error) {
//           // console.log('login session', err);
//           return res.send({
//             success: false,
//             message: 'Error: server error',
//           });
//         }
//         return res.send({
//           success: true,
//           message: 'Valid sign in',
//           // eslint-disable-next-line no-underscore-dangle
//           token: doc._id,
//         });
//       });
//     }
//   );
// };
