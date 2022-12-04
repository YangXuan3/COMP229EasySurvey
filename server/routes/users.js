/*
    File name: users.js
    Group name: Easy Survey
    Session: COMP229004
    Date: Dec 4, 2022
*/
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
