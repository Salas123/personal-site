const express = require('express');

const namesAndEmailsRoutes = express.Router();
const dbo = require('../db/conn');
// const ObjectId = require('mongodb').ObjectId;

namesAndEmailsRoutes.route('/namesAndEmails').get(function (req, res){
    let db_connect = dbo.getDB('personal_site');
    db_connect
        .collection('names_and_emails')
        .find({})
        .toArray(function (err, result){
            if (err) throw err;
            res.json(result);
        });
});


namesAndEmailsRoutes.route('/namesAndEmails/:email').get(function (req, res){
    let db_connect = dbo.getDB();
    let myquery = {email: req.param.email};

    db_connect
        .collection('names_and_emails')
        .findOne(myquery, function (err, result){
        if(err) throw err;
        res.json(result);
    });
});


namesAndEmailsRoutes.route('/namesAndEmails/add').post(function (req, response){
    let db_connect = dbo.getDB();
    let namesAndEmailsDoc = {
        fullName: req.body.fullName,
        email: req.body.email,
    };

    db_connect
        .collection('names_and_emails')
        .insertOne(namesAndEmailsDoc, function (err, res){
        if (err) throw err;

        console.log(response.json(res));
    });


});

module.exports = namesAndEmailsRoutes;
