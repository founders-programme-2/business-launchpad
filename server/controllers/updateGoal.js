const User = require('../database/models/User');

const updateGoal = (req, res, next) => {
  // Find all user goal,find the goal to update, update it , return the updated goal for that user
  const { _id, goalId, reflection, dateCompleted } = req.body;
  User.findOneAndUpdate(
    { _id, 'goals._id': goalId },
    {
      $set: {
        'goals.$.completed': true,
        'goals.$.reflection': reflection,
        'goals.$.dateCompleted': dateCompleted,
      },
    },
    { new: true },
    (err, doc) => {
      if (err) {
        // I will return To handel it as server error
        next();
      }
      res.send({
        success: true,
        data: doc,
      });
    }
  );
};

module.exports = { updateGoal };
