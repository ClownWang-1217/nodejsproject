



if(0)
{
	const http = require('http');

	const hostname = '127.0.0.1';
	const port = 3000;
	
	const server = http.createServer((req, res) => {
	  res.statusCode = 200;
	  res.setHeader('Content-Type', 'text/plain');
	  res.end('Hello, World!\n');
	});

	server.listen(port, hostname, () => {
	  console.log(`Server running at http://${hostname}:${port}/`);
	});
}
else
{
	var express = require("express");
	var bodyParser = require("body-parser");
	var app = express();

	//root
	/*app.get('/',function(req,res){
		var host = req.hostname;
		var protocol = req.protocol;
		console.log("host : %s   protocol : %s",host,protocol);
		res.send('hello');
	});*/
	//
	var process_get = require('./route/process_get.js');
	app.use('/use',require('./route/user'));
	app.use('/process_get',process_get.getProducts1);
	var server = app.listen(8081,function()
		{
			var host = server.address().address;
			var port = server.address().port;
			console.log("应用实例，访问地址为: http://%s:%s",host,port);
		});
}




