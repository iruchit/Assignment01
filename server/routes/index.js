var express = require('express');
var router = express.Router();
let indexController = require('../controllers/index');

/* GET home page. */
router.get('/', indexController.displayHomePage);

router.get('/home', indexController.displayHomePage);

/*About me page*/
router.get('/about', indexController.displayAboutPage);

/*Projects page*/
router.get('/projects', indexController.displayProjectsPage);

/*Service page */
router.get('/services', indexController.displayServicesPage);

/*Contact page*/
router.get('/contact', indexController.displayContactPage);

module.exports = router;
