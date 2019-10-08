var express = require('express');
var router = express.Router();

/* GET users listing. */
router.use('/', function(req, res, next) {
  res.render('users',{number:req.body.number,pwd:req.body.password})
});

module.exports = router;
