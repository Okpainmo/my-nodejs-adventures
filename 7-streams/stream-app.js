const http = require('http');
const { readFileSync } = require('fs');

http
  .createServer((req, res) => {
    res.end(readFileSync('./contents/big.txt', 'utf8'));
  })
  .listen(5000, () => {
    console.log('server listening on port: 5000');
  });
