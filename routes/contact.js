/* File name - contact.js
Student name - Pravalika Chada
Student Id - 301291332
Date - 06/02/2023 */
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// connect to our contact model
let Contact = require('../models/contact');

// Add contact record - CREATE operation.
router.post('/', (req, res, next) => {
    let newContact = Contact({
        "firstName": req.body.firstName,
        "lastName": req.body.lastName,
        "emailId": req.body.emailId,
        "contactNo": req.body.contactNo,
        "message": req.body.message
    })
    Contact.create(newContact, (err, Contact) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        else {
            res.redirect('/home');
        }
    });
});

module.exports = router;

