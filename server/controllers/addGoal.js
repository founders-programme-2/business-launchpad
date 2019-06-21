// Leaving console logs in for development information
/* eslint-disable no-console */
// TODO: remove console.logs before handover

const User = require('../database/models/User');
const { validateGoal } = require('../middleware/validation/validateGoal');
const { getGoals } = require('./getGoals');

const addGoal = (req, res) => {
  const { errors, isValid } = validateGoal(req.body);
  if (!isValid) {
    return res.status(400).send(errors);
  }

  const { _id } = req.body;

  return User.findOne({ _id }).then(foundUser => {
    if (!foundUser) {
      return res.status(400).send({
        success: false,
        message: 'User not found',
      });
    }
    foundUser.goals.push(req.body);
    return foundUser.save(err => {
      if (err) {
        console.log(`Sorry you've had an error saving a goal! Error:${err}`);
        return res.status(400).send({
          success: false,
          message: 'Error saving goal',
        });
      }
      console.log(`Goal saved to user!`);
      return getGoals(req, res);
    });
  });
};

module.exports = { addGoal };
