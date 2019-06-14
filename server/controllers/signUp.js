const User = require('../database/models/User');

const signUp = (req, res) => {
  // get the body content from frontend request
  const { body } = req;
  const { password } = body;
  let { email } = body;

  // make sure the request includes an email and password
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

  // ensure all emails are stored the same in database
  email = email.toLowerCase();
  email = email.trim();

  // finds searches for email in User table in database
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
      // checks to see if user already exists
      if (previousUsers.length > 0) {
        return res.send({
          success: false,
          message: 'Error: Account already exists.',
        });
      }

      // If the user doesn't already exist, save the user
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
