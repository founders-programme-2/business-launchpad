const bcrypt = require('bcryptjs');
const User = require('../database/models/User');
const { validateRegister } = require('../validation/validateRegister');

const register = (req, res) => {
  // validate data sent in registration
  const { errors, isValid } = validateRegister(req.body);
  const { name, email, password } = req.body;

  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email }).then(user => {
    if (user) {
      return res.status(400).json({
        email: 'Email already exists',
      });
    }
    const newUser = new User({
      name,
      email,
      password,
    });

    // Hash password
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (error, hash) => {
        if (error) throw error;
        newUser.password = hash;
        newUser
          .save()
          .then(registeredUser => res.json(registeredUser))
          .catch(hashErr =>
            console.log(`You have a hashing error: ${hashErr}`)
          );
      });
    });
  });
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
