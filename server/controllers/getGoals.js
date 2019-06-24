const User = require('../database/models/User');

const getGoals = (req, res) => {
  const { _id } = req.body;

  return User.findById(_id, 'goals')
    .then(goals => {
      res.status(200).send({
        success: true,
        data: goals,
      });
    })
    .catch(err => {
      res.send({
        success: false,
        error: err,
      });
    });
};

module.exports = { getGoals };
