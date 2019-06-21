const { register } = require('./register');
const { login } = require('./login');
const { logout } = require('./logout');
const { addGoal } = require('./addGoal');
const { getResources } = require('./getResources');
const { getGoals } = require('./getGoals');
const { authErr } = require('./authErr');

module.exports = {
  register,
  login,
  logout,
  addGoal,
  getResources,
  getGoals,
  authErr,
};
