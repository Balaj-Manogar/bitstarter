var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  
fs.readFile('index.html', function(err, page) {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(page);
            response.end();
        });
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
