
const    _redis = require("redis");//引入redis   
/*       注意：如果redis-server与nodejs客户端都在本地，下列可写成
 *       client = _redis.createClient();否则要对括号内容进行更改 */
const    client = _redis.createClient(6379,'127.0.0.1');//括号内容对应：(端口号,主机) 
client.on("ready", function (err) {  
    console.log("ready :" , "yes"); //链接成功检测
}); 
client.on("error", function (err) {  
    console.log("Error :" , err);  //错误检测
});