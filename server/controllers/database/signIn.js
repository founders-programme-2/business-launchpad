const User = require('../../database/models/User');

module.exports = app => {
  // Sign Up

  app.post('/db/account/signup', (req, res, next) => {
    const { body } = req;
    const { password } = body;
    let { email } = body;

    if (!email) {
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

    User.find(
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
        newUser.save((err, user) => {
          if (err) {
            return res.send({
              success: false,
              message: 'Signed up',
            });
          }
          return res.send({
            success: true,
            message: 'Signed up',
          });
        });
      }
    );
  });
};
