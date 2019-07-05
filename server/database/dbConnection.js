/* eslint-disable no-console */
const mongoose = require('mongoose');
// load environment variables from and .env into a process.env
require('dotenv').config();

let mongoUri = process.env.MONGODB_URI;

if (process.env.NODE_ENV === 'test') {
  // change uri to testing database uri
  mongoUri = process.env.MONGO_URI_TEST;
} else if (process.env.NODE_ENV !== 'production') {
  // change uri to dev database
  mongoUri = process.env.MONGO_URI_DEV;
}

const dbConnection = () => {
  mongoose
    .connect(mongoUri, { useNewUrlParser: true })
    .then(() => console.log('MongoDB successfully connected 🔥 to', mongoUri))
    .catch(err => console.log('DB connection error', err));
};

module.exports = dbConnection;
