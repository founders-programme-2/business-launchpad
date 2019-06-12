const mongoose = require('mongoose');

const { Schema } = mongoose;
const goalSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
category: {
    type: String,
},
  estimatedDateOfCompletion: {
    type: Date
  },
  details: {
    type: String
  },
});

// There should be a ref to the Users as every User has Many Goals
module.exports = mongoose.model('Goal', goalSchema);
