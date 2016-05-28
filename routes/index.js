var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/menu');
});

router.get('/menu', function(req, res, next) {
  res.render('menu');
});

router.get('/maptest', function(req, res, next) {
  res.render('maptest');
});

router.get('/vis', function(req, res, next) {
  res.render('vis');
});

router.get('/vis2', function(req, res, next) {
  res.render('vis2');
});

module.exports = router;
