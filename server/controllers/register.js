const bcrypt = require('bcryptjs');
const User = require('../database/models/User');
const {
  validateRegister,
} = require('../middleware/validation/validateRegister');

const register = (req, res, next) => {
  Promise.resolve()
    .then(() => {
      // validate data sent in registration using validation functions
      const { errors, isValid } = validateRegister(req.body);
      const { name, email, password } = req.body;

      if (!isValid) {
        return res.status(400).send(errors);
      }

      // if the information sent in request is valid, search User table to see if user already exists
      return User.findOne({ email }).then(user => {
        if (user) {
          return res.status(400).send({
            success: true,
            message: 'Sorry, that email already exists',
          });
        }
        // if not an existing user, create a new user with name, email and password fields
        const newUser = new User({
          name,
          email,
          password,
        });

        // Hash password before storing it in database
        return bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (error, hash) => {
            if (error) throw err;
            newUser.password = hash;
            newUser
              .save()
              .then(registeredUser => res.send(registeredUser))
              .catch(next);
          });
        });
      });
    })
    .catch(next);
};

module.exports = { register };
