const express = require('express');
const {
  register,
  login,
  logout,
  addGoal,
  getResources,
} = require('./controllers');

const router = express.Router();

router.post('/account/register', register);
router.post('/account/login', login);
router.get('/account/logout', logout);
router.post('/account/goal', addGoal);
router.get('/resources/get', getResources);

module.exports = router;
