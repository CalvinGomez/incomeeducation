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

module.exports = router;
