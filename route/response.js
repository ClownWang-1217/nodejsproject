var express = require("express");

var app = new express();

/*
app.use('/',function(req,res){
	var response = {
       "first_name":req.query.first_name,
       "last_name":req.query.last_name

   };
   console.log(response);
   res.end(JSON.stringify(response));
});
*/

app.use('/Post',function(req,res){
	var response = 
	[
		{
			"id": 'wechat0.jpg',	       
			"image":"wechat0.jpg"
		},
		{
			"id": 'wechat1.jpg',	       
			"image":"wechat1.jpg"
		},
		{
			"id": 'wechat2.jpg',	       
			"image":"wechat2.jpg"
		},
		{
			"id": 'wechat3.jpg',	       
			"image":"wechat3.jpg"
		},
		{
			"id": 'wechat4.jpg',	       
			"image":"wechat4.jpg"
		}
	];

		

   	//res.writeHead(200, {"Content-Type": "application/json"});
  	//res.write(JSON.stringify(response));
  	console.log(JSON.stringify(response));
  	res.end(JSON.stringify(response));
});

app.listen(8081,function(req,res){

	console.log('star ...');
});
