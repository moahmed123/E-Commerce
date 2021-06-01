let mongoose = require('mongoose');

const ProductsSchema = mongoose.Schema({
    name: {
        type: String,
        description: "must be a string and is required",
        required: false
    },
    category: {
        type: String,
        description: "must be a string and is required",
        required: false
    },
    subCategory: {
        type: String,        
        required: false
    },
    rate: {
        type: Number,        
        required: false
    },
    reviewCount: {
        type: Number,        
        required: false
    },
    price: {
        type: Number,
        description: "must be a Number and is required",
        required: false
    },
    discount: {
        type: Number,        
        required: false
    },
    new:{
        type: Date,
        default: Date.now
    },
    quantity: Number,
    sex: {
        type: String,        
        required: false
    },
    images: {
        type: Array,
        required: false
    },
    thumbImage:{
        type: Array,
        required: false
    },
    description: {
        type: String,        
        required: false
    } 
});
module.exports = mongoose.model('Products', ProductsSchema);