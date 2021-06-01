const Products = require('../../models/Products/Products');
let mongoose = require('mongoose');


module.exports._Productsdata = (req, res, next) => {        
    Products.find({}, (err_db, result) => {
        if (err_db) throw err_db;
        console.log(result);
        res.status(200).json(result);  
    })  
}