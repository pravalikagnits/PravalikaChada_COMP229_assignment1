let mongoose = require('mongoose');
let contactModel = mongoose.Schema({
    firstName: String,
    lastName: String,
    emailId: String,
    contactNo: String,
    message: String
},
    {
        collection: "contactDetails"
    }
);

module.exports = mongoose.model('contact',contactModel);