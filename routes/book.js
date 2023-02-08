/* File name - book.js
Student name - Pravalika Chada
Student Id - 301291332
Date - 04/02/2023 */
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// connect to our books model
let Book = require('../models/books');

// get ROUTE FOR THE BOOK LIST PAGE - read operation
router.get('/', (req, res, next) => {
    Book.find((err, BookList) => {
        if (err) {
            return console.error(err);
        }
        else {
            // console.log(BookList);
            res.render('book', { title: 'Books', BooksList: BookList });
        }
    });
});

module.exports = router;

