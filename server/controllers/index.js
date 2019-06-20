const { register } = require('./register');
const { login } = require('./login');
const { logout } = require('./logout');
const { addGoal } = require('./addGoal');
const { getResources } = require('./getResources');

module.exports = {
  register,
  login,
  logout,
  addGoal,
  getResources,
};
