const mongoose = require('mongoose');
const goalSchema = require('./Goal');

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    default: '',
  },
  password: {
    type: String,
    default: '',
  },
  name: {
    type: String,
    default: '',
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
  signUpDate: {
    type: Date,
    default: Date.now(),
  },
  completedRegistration: {
    type: Boolean,
    default: false,
  },
  completedInitialAssessment: {
    type: Boolean,
    default: false,
  },
  goals: [goalSchema],
});

module.exports = mongoose.model('User', UserSchema);
