const User = require('../database/models/User');

const signUp = (req, res, next) => {
  // will use next later
  const { body } = req;
  const { password } = body;
  let { email } = body;

  if (!email) {
    return res.send({
      success: false,
      message: 'Error: Email cannot be blank.',
    });
  }

  if (!password) {
    return res.send({
      success: false,
      message: 'Error: Password cannot be blank.',
    });
  }

  email = email.toLowerCase();
  email = email.trim();

  // Steps:
  // 1. Verify email doesn't exist
  // 2. Save

  return User.find(
    {
      email,
    },
    (err, previousUsers) => {
      if (err) {
        return res.send({
          success: false,
          message: 'Error: Server error.',
        });
      }
      if (previousUsers.length > 0) {
        return res.send({
          success: false,
          message: 'Error: Account already exists.',
        });
      }

      // Save the user
      const newUser = new User();
      newUser.email = email;
      newUser.password = newUser.generateHash(password);
      return newUser.save((error, user) => {
        // will use user later
        if (error) {
          return res.send({
            success: false,
            message: 'Error: Server error',
          });
        }
        return res.send({
          success: true,
          message: 'Signed up',
        });
      });
    }
  );
};

module.exports = { signUp };

// module.exports = app => {
//   // Sign up AKA create a user

//   app.post('/createUser', (req, res, next) => {
//     const { body } = req;
//     const { password } = body;
//     let { email } = body;

//     if (!email) {
//       return res.send({
//         success: false,
//         message: 'Error: Email cannot be blank.',
//       });
//     }

//     if (!password) {
//       return res.send({
//         success: false,
//         message: 'Error: Password cannot be blank.',
//       });
//     }

//     email = email.toLowerCase();
//     email = email.trim();

//     // Steps:
//     // 1. Verify email doesn't exist
//     // 2. Save

//     User.find(
//       {
//         email,
//       },
//       (err, previousUsers) => {
//         if (err) {
//           return res.send({
//             success: false,
//             message: 'Error: Server error.',
//           });
//         }
//         if (previousUsers.length > 0) {
//           return res.send({
//             success: false,
//             message: 'Error: Account already exists.',
//           });
//         }

//         // Save the user
//         const newUser = new User();
//         newUser.email = email;
//         newUser.password = newUser.generateHash(password);
//         newUser.save((error, user) => {
//           if (error) {
//             return res.send({
//               success: false,
//               message: 'Error: Server error',
//             });
//           }
//           return res.send({
//             success: true,
//             message: 'Signed up',
//           });
//         });
//       }
//     );
//   });
// };
