var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {  
    
    const TemplatesPaths = 'templates';// Templates Paths.
    const TemplatesApplied = 'Molo';// Templates Currently Applied.
    //${__dirname}    
    res.render(`${TemplatesPaths}/${TemplatesApplied}`, { 
        
        Path: `/${TemplatesPaths}/${TemplatesApplied}`,
        layout: `${TemplatesPaths}/${TemplatesApplied}/layout`

    });
});

module.exports = router;
