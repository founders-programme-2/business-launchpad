const mongoose = require('mongoose');

// load environment variables from and .env into a process.env
require('dotenv').config();

let mongoUri = process.env.MONGO_URI;
if (process.env.NODE_ENV === 'test') {
  // change uri to testing database uri
  mongoUri = process.env.MONGO_URI_TEST;
} else if (process.env.NODE_ENV !== 'production') {
  // change uri to production database uri
  mongoUri = process.env.MONGO_URI_DEV;
}

const dbConnection = () => {
  mongoose.connect(mongoUri, err => {
    if (err) throw err;
    else {
      // eslint-disable-next-line no-console
      console.log(`You are successfully connected to ${mongoUri}!`);
    }
  });
};

module.exports = dbConnection;
