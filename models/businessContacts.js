/* File name - book.js
Student name - Pravalika Chada
Student Id - 301291332
Date - 24/02/2023 */
let mongoose = require('mongoose');
let businessContactModel = mongoose.Schema({
    name: String,
    number: String,
    email: String
},
    {
        collection: "contacts"
    });

module.exports = mongoose.model('businessContact', businessContactModel);
