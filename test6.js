var http = require('http');

http.createServer(function(req, res) {
    console.log("Request received");
    res.end("Welcome in Silver Oak University");
}).listen(5000);

console.log("Server running on port 5000");