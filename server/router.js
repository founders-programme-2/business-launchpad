const express = require('express');
const expressJwt = require('express-jwt');
const {
  register,
  login,
  logout,
  getResources,
  getGoals,
  addGoal,
  authErr,
} = require('./controllers');

const router = express.Router();

// middleware that ensures that any routes starting with /api have a valid token
router.use('/api', expressJwt({ secret: process.env.SECRET }));
router.use(authErr);

router.get('/api/logout', logout);
router.post('/api/goal', addGoal);
router.get('/api/get', getResources);
router.post('/api/allgoals', getGoals);
router.post('/account/register', register);
router.post('/account/login', login);

module.exports = router;
