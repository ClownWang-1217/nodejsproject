var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs')
var _url = require('url')
/* GET home page. */
// router.get('/', function(req, res, next) {
//   var url = path.join(__dirname,'../views/indexhtml.html');
//   res.sendFile(req.app.get('views')+'/indexhtml.html');
//   console.log('path.dirname>>>>>>>>>>>>>>>'+url);
//   console.log('__dirname>>>>>>>>>>>>>>>'+__dirname);
//   console.log('__filename>>>>>>>>>>>>>>>'+__filename);
  

// });

router.use('/download',function(req,res,next){
  //res.sendFile(req.app.get('views')+'/indexhtml.html');
  var url = path.join(__dirname,'../views/有可能的夜晚-曾轶可.mp3');
  //1:
  //res.download(url,'有可能的夜晚.mp3');
  //2:
  var tmp = req.url;
  console.log(_url.parse(tmp));
  var stream = fs.createReadStream(url);
  var data = new Buffer.alloc(0)
        
  // 读取二进制数据的内容并且添加到buffer中
  stream.on('readable', function () {
      var newData = stream.read()
      //console.log('newData.length>>>>>>>>>>>>>>>>>>>>>>>>>>>>>'+newData)
      if (newData)
          data = Buffer.concat([data, newData], data.length + newData.length)
  })
  stream.on('end', function () {
    console.log('data.length>>>>>>>>>>>>>>>>>>'+ data.length);
     //res.setHeader('Content-Length', data.length);
     res.setHeader('Content-disposition', 'attachment; filename=dramaticpenguin.mp3');
     res.write(data, 'binary');
     res.end();
  });
})
module.exports = router;
