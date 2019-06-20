const express = require('express');
const {
  register,
  login,
  logout,
  getResources,
  getGoals,
} = require('./controllers');

const router = express.Router();

router.post('/account/register', register);
router.post('/account/login', login);
router.get('/account/logout', logout);
router.get('/resources/get', getResources);
router.post('/account/allgoals', getGoals);

module.exports = router;
