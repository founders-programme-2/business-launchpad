const User = require('../database/models/User');
const { getGoals } = require('./getGoals');

const deleteGoal = (req, res) => {
  const { _id, goalId } = req.body;
  console.log('body is: ', req.body);

  // finds the user, deletes the goal, and returns the updated list
  return User.findById(_id)
    .then(foundUser => {
      // console.log('found user:', foundUser);
      foundUser.goals.id(goalId).remove();
      foundUser.save(err => {
        if (err) {
          console.log(
            `Sorry you've had an error deleting a goal! Error:${err}`
          );
          return res.status(400).send({
            success: false,
            message: 'Error deleting goal',
          });
        }
        console.log(`Goal deleted!`);
        return getGoals(req, res);
      });
    })
    .catch(err => {
      console.log('there was an error: ', err);
      res.send({
        success: false,
        error: err,
      });
    });
};

module.exports = { deleteGoal };
