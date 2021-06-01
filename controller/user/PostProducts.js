const Products = require('../../models/Products/Products');

module.exports.PostProducts = (req, res, next) => {
    // console.log(req.body.FirstName)
    // res.send('Book is added to the res.json({requestBody: req.body}) database');
    // res.json({requestBody: req.body}) 
        
    console.log('Got body:', req.body);
    console.log('Got body:', req.body.Name);

    const Pro = new Products({
        Name: req.body.Name
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