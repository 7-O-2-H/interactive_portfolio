const express = require('express');
const router = express.Router();
const userQueries = require('../db/queries/users');

/* Login Page. */
router.get('/login', function(req, res, next) {
  res.send('login page');
});

//Login post method goes here

/* Register */
router.get('/register', function(req, res, next) {
  res.send('register page');
});

//Signup post method goes here

module.exports = router;

