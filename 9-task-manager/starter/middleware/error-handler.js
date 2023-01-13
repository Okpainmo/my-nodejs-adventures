const { customAPIError } = require('../errors/custom-error');

const errorHandler = (err, req, res, next) => {
  console.log(err);

  //   return res.status(500).json({ msg: err });

  // or using a simpler error message

  // this first message for
  //   return res.status(500).json({ msg: 'something went wrong' });

  // this second message

  //   return res.status(err.status).json({ msg: err.message });

  // or this method for the advanced error creation message
  if (err instanceof customAPIError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }

  return res
    .status(500)
    .json({ msg: 'Something went wrong, please try again' });
};

module.exports = errorHandler;
