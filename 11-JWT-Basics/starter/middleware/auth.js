// this error for general write-code method
// const CustomAPIError = require('../errors/custom-error');

// this method for using https-status-codes method
const { unauthenticatedError } = require('../errors');

const jwt = require('jsonwebtoken');
require('dotenv').config();

const authenticationMiddleware = async (req, res, next) => {
  // validate JWT token
  const authHeaders = req.headers.authorization;

  if (!authHeaders || !authHeaders.startsWith('Bearer ')) {
    // this error for general write-code method
    //   throw new CustomAPIError('Incorrect login token', 401);

    // this method for using https-status-codes method
    throw new unauthenticatedError('Incorrect login token');
  }

  const token = authHeaders.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { id, username } = decoded;

    req.user = { id, username };
    next();
  } catch (error) {
    // this error for general write-code method
    // throw new CustomAPIError('Not authorized to access this route', 401);

    // this method for using https-status-codes method
    throw new unauthenticatedError('Not authorized to access this route');
  }
};

module.exports = authenticationMiddleware;
