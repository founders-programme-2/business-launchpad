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

  return User.findOne({ email }).then(user => {
    if (!user) {
      return res.status(400).send({
        success: false,
        message: 'User not found. Please sign up.',
      });
    }

    return bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // create JTW payload
        const payload = {
          id: user.id,
          name: user.name,
        };

        // sign token, expires in 1 year in seconds
        return jwt.sign(
          payload,
          secret,
          { expiresIn: 31556926 },
          (err, token) => {
            res.send({
              success: true,
              token: `Bearer${token}`,
            });
          }
        );
      }
      return res.status(400).send({
        success: false,
        message: 'Sorry, password is incorrect.',
      });
    });
  });
};

module.exports = { login };
