const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSessionSchema = new mongoose.Schema({
  // userId is the Mongo document id that is created automatically
  userId: {
    type: String,
    default: '',
  },
  timestamp: {
    type: Date,
    default: Date.now(),
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

UserSessionSchema.methods.generateHash = password => {
  return bcrypt.hashSync(password, bcrypt.getSaltSync(8), null);
};

UserSessionSchema.methods.validPassword = password => {
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('UserSession', UserSessionSchema);
