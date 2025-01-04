const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);

server.listen(8080); //This is the bug, it should be server.listen(8080, () => {
  console.log('Server is running on port 8080');
});