const express = require('express');
const app = express();
const notFound = require('./middleware/not-found');
const errorHandler = require('./middleware/error-handler');
require('dotenv').config();

// routes
const tasks = require('./project-routes/tasks');

//DB connection
const connectDb = require('./db/connect');

// middleware for importing the app frontend.
app.use(express.static('./public'));

// middleware for handling json in post requests.
app.use(express.json());

//routes

app.use('/api/v1/tasks', tasks);

// custom middleware for handling missing routes - this middleware should always come after the routes one above.
app.use(notFound);

// error handler middleware
app.use(errorHandler);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDb(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
