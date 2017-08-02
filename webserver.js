var http = require('http');

var server = http.createServer(function(request, response) {
    console.log('HTTP Request Initialised');
    response.write('Node.js works');
    response.end();
});

server.listen(3000); 
