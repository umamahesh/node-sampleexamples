var http = require("http");
var fs = require("fs");

http.createServer( function( req, res ) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  
    fs.readFile("mynewfile3.txt", function(err, data){
  	  console.log(data);
    });

	fs.writeFile('mynewfile3.txt', 'Hello content! sfasfsd', function (err) {
	  if (err) throw err;
	  console.log('Saved!');
	});

  res.write("sdadas");
}).listen(8080);