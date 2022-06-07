const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/', function(req, res, next){
    let indexHtml = fs.readFileSync('./views/index.html');
    res.write(indexHtml);
    res.end();
    //res.end("this is homepage");
});

module.exports = router;