const mongoose = require('mongoose');

let mongoUri = process.env.MONGO_URI;
if (process.env.NODE_ENV === 'test') {
  // change uri to testing database uri
  mongoUri = process.env.MONGO_URI_TEST;
} else if (process.env.NODE_ENV !== 'production') {
  // change uri to dev database
  mongoUri = process.env.MONGO_URI_DEV;
}

const dbConnection = () => {
  mongoose.connect(mongoUri, { useNewUrlParser: true });
};

module.exports = dbConnection;
