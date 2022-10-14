const http = require("http");
var fs = require("fs");
var index = fs.readFileSync("index.html");

const hostname = "localhost";
const port = 5000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end(index);

  // res.end("Running at localhost 5000");
  console.log(res);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/nacktschnecke`);
});
