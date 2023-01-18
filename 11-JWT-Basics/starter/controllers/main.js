// this error for general write-code method
// const CustomAPIError = require('../errors/custom-error');

// this method for using https-status-codes method
const { badRequestError } = require('../errors');

const jwt = require('jsonwebtoken');
require('dotenv').config();

const login = (req, res) => {
  const { username, password } = req.body;

  // input validation can be done with - mongoose error checking/validation, Joi package, or on check in the controller.
  /* setup authentication so that only requests with JWT can access the dashboard - check in the controller using 
  our custom error handler middleware */

  if (!password || !username) {
    // this error for general write-code method
    // throw new CustomAPIError('please provide username and password', 400);

    // this method for using https-status-codes method
    throw new badRequestError('please provide username and password');
  }

  // mock id for tutorial - cos we can't access db yet.
  const id = new Date().getDate();

  // jwt secret
  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });

  // console.log(username, password, id, token);
  res.status(200).json({ msg: 'user created', token });
};

const dashboard = (req, res) => {
  // // using direct method

  // const authToken = Math.floor(Math.random() * 100);

  // validate JWT token
  // const authHeaders = req.headers.authorization;

  // if (!authHeaders || !authHeaders.startsWith('Bearer ')) {
  //   throw new CustomAPIError('Incorrect login token', 401);
  // }

  // const token = authHeaders.split(' ')[1];

  // try {
  //   const decoded = jwt.verify(token, process.env.JWT_SECRET);
  //   console.log(decoded);

  //   res.status(200).json({
  //     msg: `Hello ${decoded.username}`,
  //     secret: `your secret code for accessing the dashboard is ${authToken}`,
  //   });
  // } catch (error) {
  //   throw new CustomAPIError('Not authorized to access this route', 401);
  // }

  // // using auth middleware - as a result of being usable for different routes

  console.log(req.user);
  const luckyNumber = Math.floor(Math.random() * 100);

  res.status(200).json({
    msg: `Hello ${req.user.username}`,
    secret: `your secret code for accessing the dashboard is ${luckyNumber}`,
  });
};

module.exports = {
  login,
  dashboard,
};
