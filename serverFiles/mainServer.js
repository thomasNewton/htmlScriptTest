//   a test server in node.js
// first attempt
// 10/12/22

var dt = require('./dateMod');
var http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.write("<h1>hello</h1>world&nbsp");
  res.end('Hello World at'+dt.myDateTime());
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
  
});