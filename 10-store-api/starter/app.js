require('dotenv').config();

// import express async-error helper
require('express-async-errors');

// app basics
const express = require('express');
const app = express();

//DB connection
const connectDb = require('./db/connect');

// router import(s)
const productsRouter = require('./routes/products');

// error-related setup
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

// express json middleware for handling post requests.
app.use(express.json());

// routes

app.get('/', (req, res) => {
  res.send(
    `<h1>You're welcome to the second project</h1><a href="/api/v1/products">products route</a>`
  );
});

app.use('/api/v1/products', productsRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    //connectDb
    await connectDb(process.env.MONGO_DB_URI);
    app.listen(port, console.log(`Server is listening on port: ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
