// Leaving console logs in for development information
/* eslint-disable no-console */
// TODO: remove console.logs before handover

const User = require('../database/models/User');
const { validateGoal } = require('../middleware/validation/validateGoal');
const { getGoals } = require('./getGoals');

const addGoal = (req, res, next) => {
  Promise.resolve()
    .then(() => {
      const { errors, isValid } = validateGoal(req.body);
      if (!isValid) {
        let errorsToSend = '';
        errorsToSend += errors.title ? errors.title : '';
        errorsToSend += errors.category ? errors.category : '';

        return res.send({
          success: false,
          message: errorsToSend,
        });
      }

      const { _id } = req.body;

      return User.findOne({ _id }).then(foundUser => {
        if (!foundUser) {
          return res.send({
            success: false,
            message: 'User not found',
          });
        }

        // had problems with accidentally saving the user _id into every goal, so instead we are creating a new object every time
        const goalToAdd = {
          title: req.body.title,
          category: req.body.category,
          dateTodo: req.body.date,
          details: req.body.details,
        };
        foundUser.goals.push(goalToAdd);
        return foundUser.save(err => {
          if (err) {
            console.log(
              `Sorry you've had an error saving a goal! Error:${err}`
            );
            return res.send({
              success: false,
              message: 'Error saving goal',
            });
          }
          console.log(`Goal saved to user!`);
          return getGoals(req, res);
        });
      });
    })
    .catch(next);
};

module.exports = { addGoal };
