
var express = require('express');
var path = require('path')
var app = express();

app.use('/static',function(req,res)
	{

		res.sendFile(path.resolve(__dirname,'..') + '/res/01.jpg');
		//res.end(path.normalize(__dirname + '/res/01.jpg'));
	});


app.listen(8082,function(req,res){

	console.log('star ...');
});