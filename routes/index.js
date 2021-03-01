var express = require('express');
var router = express.Router();
var app = express();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  // app.set('views', path.join(__dirname, 'views/Molo'));
  // app.use(express.static(path.join(__dirname, '/views/Molo')));
  res.render(`${__dirname}/../views/Molo`, { Path: "/Molo" });
  // res.render('index', { title: 'Express' });
});

module.exports = router;
