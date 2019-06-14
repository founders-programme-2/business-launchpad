const bcrypt = require('bcryptjs');
const User = require('../database/models/User');
const {
  validateRegister,
} = require('../middleware/validation/validateRegister');

const register = (req, res) => {
  // validate data sent in registration
  const { errors, isValid } = validateRegister(req.body);
  const { name, email, password } = req.body;

  if (!isValid) {
    return res.status(400).send(errors);
  }

  return User.findOne({ email }).then(user => {
    if (user) {
      return res.status(400).send({
        success: true,
        message: 'Sorry, that email already exists',
      });
    }
    const newUser = new User({
      name,
      email,
      password,
    });

    // Hash password
    return bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (error, hash) => {
        if (error) throw error;
        newUser.password = hash;
        newUser
          .save()
          .then(registeredUser => res.send(registeredUser))
          .catch(hashErr =>
            // eslint-disable-next-line no-console
            console.log(`You have a hashing error: ${hashErr}`)
          );
      });
    });
  });
};

module.exports = { register };
