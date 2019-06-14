const { register } = require('./register');
const { login } = require('./login');
const { logout } = require('./logout');
const { verifySession } = require('./verifySession');

module.exports = {
  register,
  login,
  logout,
  verifySession,
};
