var express = require('express');

var router = express.Router();

var app = express();
router.all('/',function(req,res)
{
	res.sendFile(__dirname + '/index.html');
});

/*app.get('/',function(req,res){
	res.sendFile(__dirname + '/index.html');
});*/

module.exports = router;