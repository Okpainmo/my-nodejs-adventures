const http = require('http');

const server = http.createServer((req, res) => {
  // res.write('welcome to my first node server');
  // res.end();
  // console.log(req);

  if (req.url === '/') {
    res.end('welcome to the homepage');
  }
  if (req.url === '/about') {
    // blocking code - a long counter loop that causes a pause on the server - hence delaying other requests
    for (let i = 0; i < 1000; i++) {
      for (let j = 0; j < 1000; j++) {
        console.log(`${i} ${j}`);
      }
    }
    res.end('Here is a brief history of how we started');
  }

  console.log('hello world');
  res.end(
    `<h1>Opps!!!</h1>
        <p>We cant's seem to find the resource you're lookign for</p>
        <a href="/">click here to go back home</a>   
        `
  );
});

server.listen(5000, () => {
  console.log('server listening on port: 5000');
});
