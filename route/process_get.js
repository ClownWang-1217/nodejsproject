var express = require('express');


var app = express();
//var router = express.Router();



app.get('/',function(req,res){
	var response = {
       "first_name":req.query.first_name,
       "last_name":req.query.last_name

   };
   console.log(response);
   res.end(JSON.stringify(response));
});
/*router1.all('/',function( req , res){
	var response = {
       "first_name":req.query.first_name,
       "last_name":req.query.last_name
   };
   console.log(response);
   res.end(JSON.stringify(response));
});*/

function getProducts1(req,res)
{
	var response = {
       "first_name":req.query.first_name,
       "last_name":req.query.last_name

   };
   console.log(response);
   res.end(JSON.stringify(response));
}
var path = require('path');

function getProducts2(req,res)
{
	
   res.sendFile(path.resolve(__dirname,'..') + '/res/01.jpg');
}
exports.getProducts1 = getProducts1;
exports.getProducts2 = getProducts2;