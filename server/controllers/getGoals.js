const User = require('../database/models/User');

const getGoals = (req, res, next) => {
  const { _id } = req.body;

  return User.findById(_id, 'goals')
    .then(goals => {
      res.status(200).send({
        success: true,
        data: goals,
      });
    })
    .catch(next);
};

module.exports = { getGoals };
