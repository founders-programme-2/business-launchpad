const UserSession = require('../database/models/UserSession');

// this function verifies the user's session token every time they want to perform an action
const verifySession = (req, res) => {
  // get the token from the request
  const { query } = req;
  const { token } = query;

  // searches UserSession table for active session
  UserSession.find(
    {
      _id: token,
      isDeleted: false,
    },
    (err, sessions) => {
      if (err) {
        // console.log('Error in session verification', err);
        return res.send({
          success: false,
          message: 'Error: server error',
        });
      }
      if (sessions.length !== 1) {
        return res.send({
          success: false,
          message: 'Error: invalid session.',
        });
      }
      // allows action to be completed
      return res.send({
        success: true,
        message: 'Session ok',
      });
    }
  );
};

module.exports = { verifySession };
