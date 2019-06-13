import UserSession from '../database/models/UserSession';

const logout = (req, res, next) => {
  
  // get the token
  const { query } = req;
  const { token } = query;

  // check user session table for an 'active' token matching the one made in the request
  UserSession.findOneAndUpdate({
      _id: token,
      isDeleted: false,
    }, {
      // delete the session token
      $set: { isDeleted: true },
    }, null, (err, sessions) => {
    if (err) {
      // console.log(`Error in session removal logout ${err}`)
      return res.send({
        success: false,
        message: 'Error: server error in logout'
      });
    }
    return res.send({
      success: true,
      message: 'You are logged out'
    });
  });

module.exports = { logout };