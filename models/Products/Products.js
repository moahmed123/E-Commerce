let mongoose = require('mongoose');

const ProductsSchema = mongoose.Schema({
    Name: {
        type: String,
        description: "must be a string and is required",
        required: true
    }
});
module.exports = mongoose.model('Products', ProductsSchema);