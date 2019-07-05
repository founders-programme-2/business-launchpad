const express = require('express');
const {
  register,
  login,
  logout,
  getResources,
  getGoals,
  addGoal,
  deleteGoal,
  updateGoal,
} = require('./controllers');

const { serverError } = require('./controllers/serverError');

const router = express.Router();

router.post('/account/register', register);
router.post('/account/login', login);
router.get('/account/logout', logout);
router.post('/account/goal', addGoal);
router.get('/resources/get', getResources);
router.post('/account/delete', deleteGoal);
router.post('/account/allgoals', getGoals);
router.put('/account/update', updateGoal);
router.use(serverError);

module.exports = router;
