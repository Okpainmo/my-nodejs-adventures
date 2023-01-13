const mongoose = require('mongoose');

// const connectionString =
//   'mongodb+srv://Okpainmo:teeteesme@node-express-course-pro.acj9pwz.mongodb.net/TASK-MANAGEMENT-APP-PROJECT?retryWrites=true&w=majority';

const connectDb = (url) => {
  return mongoose.connect(
    url,
    // only add these setting if you're on a version that has deprecation issues e.g v5 - with version 6, no need for these.

    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    }
  );
};

module.exports = connectDb;
// mongoose
//   .connect(
//     connectionString,
//     // only add these setting if you're on a version that has deprecation issues e.g v5 - with version 6, no need for these.

//     {
//       useNewUrlParser: true,
//       useCreateIndex: true,
//       useFindAndModify: false,
//       useUnifiedTopology: true,
//     }
//   )
// .then(() => console.log('CONNECTED TO THE DB...'))
// .catch((error) => {
//   console.log(error);
// });
