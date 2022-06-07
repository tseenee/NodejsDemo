const express = require('express');
const users = require('../services/users.js');
const router = express.Router();
// const fs = require('fs');
const usersService = require('../services/users.js');

router.post('/', function(req, res, next){
    usersService.addUser(req.body);
    res.redirect('/users/');
});

router.delete('/', function(req, res, next){
    usersService.deleteUsers(req.body.toDelete);
    res.end('OK');
});

router.get('/', function(req, res, next){
    const users = usersService.getUsers();
    res.render('users', {
        users: users
    });
    // res.render('users', {
    //     hello: {
    //         world: "Hello! World"
    //     },
    //     users: [
    //         {
    //             id: '1',
    //             name: 'Balu',
    //             email: 'erdebaru529@gmail.com'
    //         },
    //         {
    //             id: '2',
    //             name: 'Densmaa',
    //             email: 'densmaa@gmail.com'
    //         }
    //     ]
    // });
});

module.exports = router;