const http = require('http');

const server = http.createServer((req, res) => {
  // res.write('welcome to my first node server');
  // res.end();
  // console.log(req);

  if (req.url === '/') {
    res.end('welcome to the homepage');
  }
  if (req.url === '/about') {
    res.end('Here is a brief history of how we started');
  }
  res.end(
    `<h1>Opps!!!</h1>
        <p>We cant's seem to find the resource you're lookign for</p>
        <a href="/">click here to go back home</a>   
        `
  );
});

server.listen(5000);
