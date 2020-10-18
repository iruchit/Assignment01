var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/*About me page*/
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About' });
});

/*Projects page*/
router.get('/projects', function(req, res, next) {
  res.render('index', { title: 'Projects' });
});

/*Service page */
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services' });
});

/*Contact page*/
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact' });
});


module.exports = router;
