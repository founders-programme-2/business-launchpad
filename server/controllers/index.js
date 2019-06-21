const { register } = require('./register');
const { login } = require('./login');
const { logout } = require('./logout');
const { addGoal } = require('./addGoal');
const { getResources } = require('./getResources');
const { deleteGoal } = require('./deleteGoal')

module.exports = {
  register,
  login,
  logout,
  addGoal,
  getResources,
  deleteGoal,
};
