/* File name - businessContacts.js
Student name - Pravalika Chada
Student Id - 301291332
Date - 24/02/2023 */
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');
/*create the business contact model instance*/
let businessContactModel = require('../models/businessContacts');

//Display the list of business contact list..
module.exports.displayBusContactList = (req, res, next) => {
    businessContactModel.find((err, contactsList) => {
        if (err) {
            return console.error(err);
        }
        else {
            // get contacts list in sorted order.
            let contactList =  contactsList.sort((a, b) => a.name.localeCompare(b.name));
            res.render('businessContacts/list', { title: 'Business Contacts', contactsList: contactList, username: req.user ? req.user.username : '' });
        }
    });
}

//Navigate to update screen
module.exports.displayUpdatePage = (req, res, next) => {
    let id = req.params.id;
    businessContactModel.findById(id, (err, contactToUpdate) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.render('businessContacts/update', { title: 'Update Contact Details', businessContact: contactToUpdate, username: req.user ? req.user.username : '' });
        }
    });
}

// process update operation
module.exports.processUpdatePage = (req, res, next) => {
    let id = req.params.id
    let updatedContact = businessContactModel({
        "_id": id,
        "name": req.body.name,
        "number": req.body.number,
        "email": req.body.email
    });
    businessContactModel.updateOne({ _id: id }, updatedContact, (err) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.redirect('/contactsList');
        }
    });
}

// perform delete action..
module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;
    businessContactModel.remove({ _id: id }, (err) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.redirect('/contactsList');
        }
    });
}