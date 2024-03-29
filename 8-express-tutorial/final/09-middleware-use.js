const express = require('express');
const app = express();
const logger = require('./logger');
const authorize = require('./authorize');
//  req => middleware => res

//app.use adds the logger middleware to all the routes - always place the middleware above every route you want it to have effect on.
app.use([logger]);

// I did some extra play as shown in the code below - instead of the commented version.

// api/home/about/products
app.get('/', (req, res) => {
  res.send('Home');
});
app.get('/about', (req, res) => {
  res.send('About');
});
app.get('/api/products', (req, res) => {
  res.send('Products');
});
app.get('/api/items', [authorize], (req, res) => {
  console.log(req.user);
  res.send('Items');
});

app.listen(5000, () => {
  console.log('Server is listening on port 5000....');
});

// const express = require('express');
// const app = express();
// const logger = require('./logger');
// const authorize = require('./authorize');
// //  req => middleware => res
// app.use([logger, authorize]);

// // api/home/about/products
// app.get('/', (req, res) => {
//   res.send('Home');
// });
// app.get('/about', (req, res) => {
//   res.send('About');
// });
// app.get('/api/products', (req, res) => {
//   res.send('Products');
// });
// app.get('/api/items', (req, res) => {
//   console.log(req.user);
//   res.send('Items');
// });

// app.listen(5000, () => {
//   console.log('Server is listening on port 5000....');
// });
