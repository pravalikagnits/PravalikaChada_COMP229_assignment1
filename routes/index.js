/* File name - index.js
Student name - Pravalika Chada
Student Id - 301291332
Date - 04/02/2023 */
var express = require('express');
var router = express.Router();
let indexController = require('../controllers/index');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Home' });
});

router.get('/home', function(req, res, next) {
  res.render('home', { title: 'Home' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});

router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services' });
});

// /*GET Route for displaying the Login page*/
// router.get('/login', function(req, res, next) {
//   res.render('login', { title: 'Login' });
// });

/*GET Route for displaying the Login page*/
router.get('/login', indexController.displayLoginPage);

/*POST Route for processing the Login Page*/
router.post('/login', indexController.processLoginPage);

router.get('/logout', indexController.performLogout);

module.exports = router;
