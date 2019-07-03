const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../database/models/User');
const { validateLogin } = require('../middleware/validation/validateLogin');

const login = (req, res) => {
  // validates incoming login data
  const { errors, isValid } = validateLogin(req.body);
  const secret = process.env.secretOrKey;

  // sends an error if incoming data is invalid
  if (!isValid) {
    let errorsToSend = '';
    errorsToSend += errors.email ? errors.email : '';
    errorsToSend += errors.password ? errors.password : '';

    return res.send({
      success: false,
      message: errorsToSend,
    });
  }

  const { email, password } = req.body;

  return User.findOne({ email }).then(user => {
    if (!user) {
      return res.send({
        success: false,
        message: 'User not found. Please sign up.',
      });
    }

    // if user exists, use bcryptjs to compare submitted password with hashed password in our db
    return bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // if passwords match, create JTW payload
        const payload = {
          id: user.id,
          name: user.name,
        };

        // sign token, expires in 1 day in seconds
        return jwt.sign(payload, secret, { expiresIn: 86400 }, (err, token) => {
          // append the token to a 'Bearer' string (in passport.js we set opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken())
          res.send({
            success: true,
            token: `Bearer${token}`,
            userID: payload.id,
            username: user.name,
          });
        });
      }
      return res.send({
        success: false,
        message: 'Sorry, password is incorrect.',
      });
    });
  });
};

module.exports = { login };
