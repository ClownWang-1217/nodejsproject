var express = require("express")

var route = express.Router()

route.get("/",function(req,res,next){

    var json = {
        "name":"wangtao",
        "id":449127919,
    }
    console.log(JSON.stringify(json))
    res.send(JSON.stringify(json))
})

module.exports = route