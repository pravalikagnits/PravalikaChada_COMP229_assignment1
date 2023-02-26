/* File name - businessContact.js
Student name - Pravalika Chada
Student Id - 301291332
Date - 24/02/2023 */
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');
//helper function for guard purposes
function requireAuth(req, res, next) {
    //check if the user is logged in
    if (!req.isAuthenticated()) {
        return res.redirect('/login')
    }
    next();
}
//connect to our business contact model
let businessContactsController = require('../controllers/businessContacts');
//GET ROUTE for the book list page -READ OPERATION
router.get('/', businessContactsController.displayBusContactList);

/*GET Route for displaying the Edit page - UPDATE operation*/
router.get('/edit/:id', requireAuth, businessContactsController.displayUpdatePage);

/*POST Route for processing the Edit page - UPDATE Operation*/
router.post('/edit/:id', requireAuth, businessContactsController.processUpdatePage);

/*GET to perform Deletion - DELETE Operation */
router.get('/delete/:id', requireAuth, businessContactsController.performDelete);


module.exports = router;