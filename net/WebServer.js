

const PORT = 8100
var ws = require("nodejs-websocket");
var iconv = require('iconv-lite');

var messageConentType_TEXT = 0//文本消息
var messageConentType_VOICE = 1//语音消息
var messageConentType_VIDEO = 2//视频消息


var server = ws.createServer((conn) => {
    console.log("New Connection");

    conn.on("text", function (data) {
        console.log("Received" + data)
        var rdata = JSON.parse(data)
        var response = {
            "contentType":0,
            "sourceId": "01",
            "message": rdata.message,
        }
        console.log('rdata.message.length>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>'+rdata.message.length)
        console.log(rdata.message)
        console.log(server.connections.length)
        server.connections.forEach(element => {
            if (element != conn) {
                element.sendText(JSON.stringify(response))
            }
        });
    })
    conn.on('binary', function (inStream) {

        console.log('有二进制数据进来')
        // 创建空的buffer对象，收集二进制数据
        var data = new Buffer.alloc(0)
        
        // 读取二进制数据的内容并且添加到buffer中
        inStream.on('readable', function () {
            var newData = inStream.read()
            console.log('newData.length>>>>>>>>>>>>>>>>>>>>>>>>>>>>>'+newData)
            if (newData)
                data = Buffer.concat([data, newData], data.length + newData.length)
        })
        inStream.on('end', function () {
            // 读取完成二进制数据后，处理二进制数据
            var urllength = parseInt(data.slice(0,1).toString().charCodeAt())
            console.log('urllength   >>>>>>>>>>>>>>>>>>>>>>>>>>>>>'+urllength )
            var url = data.slice(1,urllength+1)
            console.log('url >>>>>>>>>>>>>>>>>>>>>>>>>>>>>'+url)      
            console.log('data.length  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>'+data.length)      
            var respData = data.slice(urllength+1,data.length)
            console.log('respData  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>'+respData)  
            var response = {
                "contentType":1,
                "sourceId": "01",
                "message": "",
                "data":respData,
                "url":url.toString()
            }
            conn.send(JSON.stringify(response), function () {
                console.log('binary send end')
            })
            
            // server.connections.forEach(element => {
            //     if (element != conn) {
            //         element.send(JSON.stringify(response), function () {
            //             console.log('binary send end')
            //         })
            //     }
            // })
        })
    })


    conn.on("close", function (code, reason) {
        console.log("SomeOne closed")
    })

    conn.on('error', function (err) {

        console.log(err)
    })


})


server.listen(PORT, function () {
    console.log("WebSocket server start")
})