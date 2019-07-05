exports.serverError = (err, req, res, next) => {
  console.log('SERVER Error !!!!!!!!!!!!!!1');
  return res
    .status(500)
    .send({ success: false, message: 'Internal Server Error' });
};
