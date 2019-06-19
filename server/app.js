const express = require('express');
const path = require('path');
const passport = require('passport');
const dbConnection = require('./database/dbConnection');
const router = require('./router');

const app = express();

// connect to database
dbConnection();

app.use(express.static(path.join(__dirname, '..', 'client', 'build')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);
// initialise passport middleware & require the passport file
app.use(passport.initialize());
require('./middleware/passport')(passport);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
});

module.exports = app;
