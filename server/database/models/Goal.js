const mongoose = require('mongoose');

const GoalSchema = new mongoose.Schema({
  title: {
    type: String,
    default: '',
  },
  category: {
    type: String,
    default: '',
  },
  dateCreated: {
    type: Date,
    default: Date.now(),
  },
  dateTodo: {
    type: Date,
  },
  dateCompleted: {
    type: Date,
  },
  details: {
    type: String,
    default: '',
  },
  completed: {
    type: Boolean,
    default: false,
  },
  reflection: {
    type: String,
    default: '',
  },
});

module.exports = GoalSchema;
