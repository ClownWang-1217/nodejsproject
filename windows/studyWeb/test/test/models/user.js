
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test',{ useNewUrlParser: true } );

var Schema = mongoose.Schema({
    username   : String,
    password   : String,
    id    : String,
    phone : String,
    email  : String
});

var User = mongoose.model('users',Schema);
module.exports = User;