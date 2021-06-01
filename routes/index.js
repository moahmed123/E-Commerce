var express = require('express');
var router = express.Router();
const { _homePgCore, _Productsdata, PostProducts} = require('../controller');

/* GET home page. */
router.get('/', _Productsdata);
router.get('/products', _Productsdata);

router.post('/products', PostProducts);

module.exports = router;
