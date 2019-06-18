const User = require('../database/models/User');

const goal = {
  title: 'Test title',
};

const addGoal = (req, res) => {
  const { _id } = req.body;

  User.findOne({ _id }).then(foundUser => {
    if (!foundUser) {
      return res.status(400).send({
        success: false,
        message: 'User not found',
      });
    }
    foundUser.goals.push(goal);
    foundUser.save(err => {
      if (err) {
        console.log(`Sorry you've had an error saving a goal! Error:${err}`);
      }
      console.log(`Yay!`);
    });
  });
};

module.exports = { addGoal };
