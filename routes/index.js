/* File name - index.js
Student name - Pravalika Chada
Student Id - 301291332
Date - 04/02/2023 */
var express = require('express');
var router = express.Router();

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


module.exports = router;
