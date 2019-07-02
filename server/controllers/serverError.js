exports.serverError = (err, req, res, next) => {
  return console.log('SERVER Error !!!!!!!!!!!!!!1');
  return res
    .status(err.status || 500)
    .send({ Error: err.message || 'Internal Server Error' });
};
