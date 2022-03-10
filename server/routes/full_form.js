const express = require('express');
const full_form_routes = express.Router();
const dbo = require('../db/conn');


full_form_routes.route('/fullForm').get(function (req, res){
    let db_connect = dbo.getDB('personal_site');
    db_connect
        .collection('full_input_form')
        .find({})
        .toArray(function (err, result){
            if (err) throw err;
            res.json(result);
        });
});


full_form_routes.route('/fullForm/add').post(function (req, response){
    let db_connect = dbo.getDB('personal_site');

    let fullFormDoc ={
        fullName: req.body.fullName,
        email: req.body.email,
        message: req.body.message,
    };


    db_connect
        .collection('full_input_form')
        .insertOne(fullFormDoc, function (err, res){
            if (err) throw err;
            console.log(response.json(res));
        });
});

module.exports = full_form_routes;

