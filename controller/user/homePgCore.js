const Mongoose = require('mongoose');
let Products = require('../../models/Products/Products');


module.exports._homePgCore = (req, res, next) => {
        /**
         ***  Connect For DB [ Main: is Global Database To choose and switch Other db for User ] ***
         *  
         **/
         const Url = 'mongodb://localhost/mainuser';
         Mongoose.connect(Url, {
            useNewUrlParser: true,
             useUnifiedTopology: true
         }, (err, db) => {
            // console.log(db, 'moahed alaaa')
            // res.send('moahed alaaa')
            if (err) {
                console.log(err)
            } else {
                console.log("db connected")
                // let path = req.headers.host;
                let path = "localhost:3002";
                console.log(Mongoose.connection.name)
                //localhost:3088
                console.log("Path ===> ", path)
                Mongoose.connection.db.collection("userdata").findOne({ url: path }, (err, doc) => {
                    if (err) throw err;
                    console.log(doc)
                    if (doc) {
                        let path = req.headers.host;
                        console.log(path)
                        Mongoose.disconnect(() => {
                            Mongoose.connect(`mongodb://localhost/userone`, (err_db, result) => {
                                if (err_db) throw err_db;
                                console.log(Mongoose.connection.name)
                                Mongoose.connection.db.collection("Products").findOne({}, (err_db, result) => {
                                    if (err_db) throw err_db;
                                    res.status(200).json(result);                                    
                                })
                                // Products.find({},"", (err, Products) => {
                                //     if (err) throw err;
                                //     if (Products) {
                                //         console.log(Products);
                                //         res.status(200).json(Products);  
                                //     }
                                
                                // })
                            });
                        });
                    } else {
                        res.status(200).json({
                            Message: 'not Found This Store Code',
                            Error: 'Not Found '
    
                        });
                    }
                })
        
            }
         });
        next();
        // const TemplatesPaths = 'templates';// Templates Paths.
        // const TemplatesApplied = 'Molo';// Templates Currently Applied.
        // //${__dirname}    
        // res.render(`${TemplatesPaths}/${TemplatesApplied}`, {             
        //     Path: `/${TemplatesPaths}/${TemplatesApplied}`,
        //     layout: `${TemplatesPaths}/${TemplatesApplied}/layout`
        // });    
}
