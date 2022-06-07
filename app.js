const express = require('express');
const moment = require('moment');
const bodyParser = require('body-parser');

const app = express();
const index = require('./routes/index.js');
const users = require('./routes/users.js');
console.log(process.pid);
console.log("Running in env: " + process.env.NODE_ENV); 

// app.use(function(request, response, next){
//     if(request.url === '/'){
//         response.end("this is home page.")
//     }else if(request.url === '/hello'){
//         response.end("hello, world");
//     }
// });
app.set('view engine', 'pug');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(express.static('public'))

app.use(function(req, res, next){
    console.log(`${moment().format('HH:mm:ss')} - ${req.method} ${req.url}`);
    next();
});

app.use('/', index);
app.use('/users', users);

app.use(function(err, req, res, next){
    console.error(`${err.stack}`);
    res.end(err.stack);
});



app.listen(3000, function(){
    console.log("Listening on http://localhost:3000/")
});