const express = require('express');
const path = require('path');
const dbConnection = require('./database/dbConnection');
const router = require('./router');

const app = express();
// load environment variables from and .env into a process.env
require('dotenv').config();

// connect to database
dbConnection();

app.use(express.static(path.join(__dirname, '..', 'client', 'build')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
});

module.exports = app;
