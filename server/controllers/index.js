const { register } = require('./register');
const { login } = require('./login');
const { logout } = require('./logout');
const { addGoal } = require('./addGoal');
const { getResources } = require('./getResources');
const { deleteGoal } = require('./deleteGoal');
const { getGoals } = require('./getGoals');
const { updateGoal } = require('./updateGoal');

module.exports = {
  register,
  login,
  logout,
  addGoal,
  getResources,
  deleteGoal,
  getGoals,
  updateGoal,
};
