const express = require('express');
const { signUp, login, logout, verifySession } = require('./controllers');

const router = express.Router();

router.post('/account/signUp', signUp);
router.post('/account/login', login);
router.get('/account/logout', logout);
router.get('/account/verifySession', verifySession);

module.exports = router;
