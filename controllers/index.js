/* File name - index.js
Student name - Pravalika Chada
Student Id - 301291332
Date - 24/02/2023 */
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');
/*create the userModel instance*/

let UserModel = require('../models/user');
let User = UserModel.User;

module.exports.displayLoginPage = (req, res, next) => {
    //check if the user is already logged in*/
    if (!req.user) {
        res.render('auth/login', {
            title: "Login",
            messages: req.flash('loginMessage'),
            username: req.user ? req.user.username : ''
        });
    }
    else {
        return res.redirect('/');
    }
}

module.exports.processLoginPage = (req, res, next) => {

    passport.authenticate('local', (err, User, info) => {
        if (err) {
            return next(err);
        }

        if (!User) {
            req.flash('loginMessage',
                'Authentication Error');
            return res.redirect('/login');
        }
        req.login(User, (err) => {
            //server error?
            if (err) {
                return next(err);
            }
            return res.redirect('/contactsList');
        });
    })(req, res, next);
}

module.exports.performLogout = (req, res, next) => {
    req.logout(function (err) {
        if (err) {
            return next(err);
        }
        res.redirect('/');
    });
}