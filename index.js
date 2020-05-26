// it might be said:
var http = require('http');

http
  .createServer((request, response) => {
    request.on('data', (chunk) => {
      console.log(chunk);
    });

    response.end('test');
  })
  .listen('8080');
