const express = require('express');
const {
  register,
  login,
  logout,
  getResources,
  getGoals,
  addGoal,
} = require('./controllers');

const router = express.Router();

router.post('/account/register', register);
router.post('/account/login', login);
router.get('/api/logout', logout);
router.post('/api/goal', addGoal);
router.get('/api/get', getResources);
router.post('/api/allgoals', getGoals);

module.exports = router;
