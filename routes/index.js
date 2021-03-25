var express = require('express');
var router = express.Router();


const { _homePgCore } = require('../controller');

/* GET home page. */
router.get('/', _homePgCore);

module.exports = router;
