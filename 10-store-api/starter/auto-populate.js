require('dotenv').config();

// import DB connection
const connectDb = require('./db/connect');

// import product models
const productModels = require('./models/product');

// import custom products
const customJsonProducts = require('./products.json');

const start = async () => {
  try {
    // connect to DB and auto-populate it with customized JSON products data
    await connectDb(process.env.MONGO_DB_URI);
    console.log('connection to DB is successful!!!');

    // now we can automate the auto-population process
    await productModels.deleteMany();
    await productModels.create(customJsonProducts);
    console.log('automation process completed!!!');
    process.exit(0);
  } catch (error) {
    console.log(error);
  }
};

start();
