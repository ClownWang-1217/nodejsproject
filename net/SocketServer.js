const net = require('net');

var MapData = new Map();

const server = net.createServer((connect)=>{
    console.log('客户端已连接');
    connect.on('end',()=>{
        console.log('客户端断开连接!!!');
    });
    connect.on('error',()=>{
        console.log('连接发生错误!!!');
    });
    connect.on('connect',()=>{
        console.log('客户端连接!!!');
    });
    
    connect.on('data',(data)=>{
        var buf = Buffer.from(data);
       //console.log(buf.toString());
        console.log(buf.toString());
        try {
            var json = JSON.parse(buf.toString());
        console.log(json.id);
        MapData.set(json.id,connect);
        console.log('当前连接数：'+MapData.size);
        } catch (error) {
            console.log(error);
        }
        connect.write('shoudao');
        var Client = getSocketConnected(json.id);
        Client.write()
    });
});
server.listen(8100,'0.0.0.0',5,()=>{
    console.log('socket server start!!!');
});

function getSocketConnected(k) 
{
    for(var [key,value] of MapData)
    {
        if(k = key)
        {
            return value;
        }
    }
    return null; 
}