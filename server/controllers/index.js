const { register } = require('./register');
const { login } = require('./login');
const { logout } = require('./logout');
const { getResources } = require('./getResources');

module.exports = {
  register,
  login,
  logout,
  getResources,
};
