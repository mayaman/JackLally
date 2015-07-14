var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Jack Lally Photography' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Jack Lally Photography' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Jack Lally Photography' });
});

router.get('/portfolio', function(req, res, next) {
  res.render('portfolio', { title: 'Jack Lally Photography' });
});

router.get('/artwork/sketches', function(req, res, next) {
  res.render('sketches', { title: 'Chella Man Art' });
});

router.get('/artwork/paint', function(req, res, next) {
  res.render('paint', { title: 'Chella Man Art' });
});

router.get('/artwork/apparel', function(req, res, next) {
  res.render('apparel', { title: 'Chella Man Art' });
});

router.get('/artwork/photography', function(req, res, next) {
  res.render('photography', { title: 'Chella Man Art' });
});

router.get('/artwork/pastels', function(req, res, next) {
  res.render('pastels', { title: 'Chella Man Art' });
});

module.exports = router;
