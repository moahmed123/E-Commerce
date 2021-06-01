const Products = require('../../models/Products/Products');

module.exports.PostProducts = (req, res, next) => {
    // console.log(req.body.FirstName)
    // res.send('Book is added to the res.json({requestBody: req.body}) database');
    // res.json({requestBody: req.body}) 
        
    console.log('Got body:', req.body);
    console.log('Got body:', req.body.name);

    const Pro = new Products({
        name: req.body.name,
        category: req.body.category,
        subCategory: req.body.subCategory,
        rate: req.body.rate,
        reviewCount: req.body.reviewCount,
        price: req.body.price,
        discount: req.body.discount,
        quantity: req.body.quantity,
        sex: req.body.sex,
        images: req.body.images,
        thumbImage: req.body.thumbImage,
        description:req.body.description,
    })
    Pro.save((err, result) => {
        if (err) {
            console.log(err);   
            res.sendStatus(400);         
        } else {
            console.log(result)            
            res.sendStatus(200);
        }
    })


    

}