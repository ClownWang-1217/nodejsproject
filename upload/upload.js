var fs = require('fs');
var express = require('express');
var multer = require('multer');


var app = express();

var upload = multer({dest: 'upload/'});

app.post('/upload',upload.single('logo'),function(req,res,next)
	{
		res.send('dddddoooo');
	});


app.listen(3000);