var http = require("http");
var url = require("url");
var uc = require('upper-case');

http.createServer( function( req, res ) {

	res.writeHead(200, {"Content-type": "text/plain", "charset" : "utf-8"});
	var q = url.parse(req.url, true);
	console.log(q.query);
	//res.write(req.url);
	res.write(uc("uma mahesh"));
	res.end("Hello world");
} ).listen(8080);

