const User = require('../database/models/User');
const { getGoals } = require('./getGoals');

const updateGoal = (req, res) => {
  // Find all user goal,find the goal to update, update it , return the updated goal for that user
  console.log(req.body);
  const { _id, goalId, reflection } = req.body;
  User.findOneAndUpdate(
    { _id, 'goals._id': goalId },
    {
      $set: {
        'goals.$.completed': true,
      },
    },
    { new: true },
    (err, doc) => {
      if (err) {
        // I will return To handel it as server error
        console.log(err);
      }
      res.send({
        success: true,
        data: doc,
      });
    }
  );
};

module.exports = { updateGoal };
