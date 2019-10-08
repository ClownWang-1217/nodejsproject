var express = require('express');
var router = express.Router();
var controller = require('../controllers/user.server.controller')(1,2,3);
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ssssExpress' });
  console.log("index")
});

module.exports = router;
