var Path = require('path');
var AbsolutePath = Path.join(__dirname, '../models');
var User = require('../models/user');


var controller =
{
    findData: function () {
        User.find((err, UserDetail) => {
            if (err) {
                console.log('error');
            }
            else {
                console.log('findData');
                console.log(UserDetail);
            }
        })
    },

    saveData: function () {
        var user = new User({
            username: 'req.body.username',
            password: 'req.body.password',
            id: 'req.body.idqq',
            phone: 'req.body.phone',
            email: 'req.body.email'
        })

        user.save((err) => {
            if (err) {
                console.log('save data err');
                return;
            }
            console.log('save data success');
            findData();
        })

    },
    removeData: function () {
        User.deleteMany({ username: 'req.body.username' }, (err) => {
            if (err) {
                console.log('remove data err');
            }
            else {
                //findData();
            }
        })
    }
}
var ss = {
    phone: '18092958684',
};
function findData() {
    User.find(ss,(err, UserDetail) => {
        if (err) {
            console.log('error');
        }
        else {
            //console.log('findData');
            console.log(UserDetail);
            // var obj = {username:'wt4491279193'};
            // console.log(JSON.stringify(obj));
            // JSON.parse(JSON.stringify(obj),(k,v)=>{
            //     console.log(v);
            // });
            // JSON.parse(' {"username": "wt4491279193","password": "d17892f424a572ebe24a6055f01c5c95","id": "22222222","phone": "18092958685", "email": "wte_@qq.com","__v": 0 }',(k,v)=>{

            //     console.log(v);
            //             });
            // JSON.parse('{"p": 5}', function(k, v) {
            //     if (k === 'p') { console.log(v); } 
            //     //return v * 2;               
            //   }); 
            UserDetail.forEach((doc,num,docs)=>
            {

                
                       
                console.log(num+'>>>>>>>>>>>>>>>'+doc);
                console.log('username:'+doc.username);
                console.log('password:'+doc.password);
                console.log('id:'+doc.id);
                console.log('phone:'+doc.phone);
                console.log('email:'+doc.email);
                
            })
            ;

        }
    })
}

 function saveData() {
    var user = new User({
        username: 'req.body.username',
        password: 'req.body.password',
        id: 'req.body.idqq',
        phone: 'req.body.phone',
        email: 'req.body.email'
    })

    user.save((err) => {
        if (err) {
            console.log('save data err');
            return;
        }
        console.log('save data success');
        findData();
    })

}
function add()
{
    var sum = 0;
    for (var i = 0, j = arguments.length; i < j; i++) {
        sum += arguments[i];
    }
    return sum;
}
module.exports =  function(){
    

    console.log(add(arguments[0],arguments[1],arguments[2]));
} 
