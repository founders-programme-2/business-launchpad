const User = require('../database/models/User');
const UserSession = require('../database/models/UserSession');

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

module.exports = { login };
