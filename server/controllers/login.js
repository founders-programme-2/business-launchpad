const User = require('../database/models/User');
const UserSession = require('../database/models/UserSession');

const login = (req, res, next) => {
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
      message: 'Error: password cannot be blank',
    });
  }

  email = email.toLowerCase();
  email = email.trim();

  return User.find(
    {
      email,
    },
    (err, users) => {
      if (err) {
        // console.log('server err', err);
        return res.send({
          success: false,
          message: 'Error: server error',
        });
      }
      if (users.length !== 1) {
        return res.send({
          success: false,
          message: 'Error: Invalid, no user',
        });
      }
      const user = users[0];
      if (!user.validPassword(password)) {
        return res.send({
          success: false,
          message: 'Error: invalid password',
        });
      }
      const userSession = new UserSession();
      // eslint-disable-next-line no-underscore-dangle
      userSession.userId = user._id;
      return userSession.save((error, doc) => {
        if (error) {
          // console.log('login session', err);
          return res.send({
            success: false,
            message: 'Error: server error',
          });
        }
        return res.send({
          success: true,
          message: 'Valid sign in',
          // eslint-disable-next-line no-underscore-dangle
          token: doc._id,
        });
      });
    }
  );
};

module.exports = { login };
