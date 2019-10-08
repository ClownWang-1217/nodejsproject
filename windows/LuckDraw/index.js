var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname,'/dist')));
app.set('view engine','html')
app.set('views', __dirname + '/dist/views');
app.engine('html',require("ejs").renderFile);
app.use('/',(req,res)=>{
    res.render("main");
})



app.listen(5000,function()
{
    console.log('listening');
});