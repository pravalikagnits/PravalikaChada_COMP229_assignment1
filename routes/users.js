/* File name - users.js
Student name - Pravalika Chada
Student Id - 301291332
Date - 04/02/2023 */

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
