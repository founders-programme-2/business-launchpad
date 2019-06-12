const express = require('express');
const { createUser } = require('./controllers');

const router = express.Router();

router.post('/createUser', createUser);

module.exports = router;
