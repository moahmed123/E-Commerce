var express = require('express');
var router = express.Router();
// var app = express();
// var path = require('path');
// const exphbs = require('handlebars');


/* GET home page. */
router.get('/', function(req, res, next) {  
  res.render(`${__dirname}/../views/Molo`, { Path: "/Molo", layout: 'Molo/layout'});
});

module.exports = router;
