const authErr = (err, req, res) => {
  // eslint-disable-next-line no-console
  console.log(err);
  if (err.name === 'UnauthorizedError') {
    res.status(err.status);
  }
  return res.send({ message: err.message });
};

module.exports = { authErr };