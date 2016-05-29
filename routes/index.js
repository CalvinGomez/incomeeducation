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

router.get('/arcgis', function(req, res, next) {
  res.render('arcgis');
});

router.get('/vis', function(req, res, next) {
  res.render('vis');
});

router.get('/visoverlay', function(req, res, next) {
  res.render('visoverlay');
});
router.get('/test', function(req, res, next) {
  res.render('test');
});

module.exports = router;
