const { request } = require('express');
let express = require('express');
let router = express.Router();
//let mongoose = require('mongoose');
//const contact = require('../models/contact');

//connect to our contact model
let Contact = require('../models/contact');

let contactController = require('../controllers/contact');

/* Get Route for the Contact List Page - Read operation */
router.get('/', contactController.displayContactList);

/* Get Route for displaying the Add Page - Create operation */
router.get('/add', contactController.displayAddPage);

/* Post Route for processing the Add Page - Create operation */
router.post('/add', contactController.processAddPage);

/* Get Route for displaying the Edit Page - Update operation */
router.get('/edit/:id', contactController.displayEditPage);

/* Post Route for processing the Edit Page - Update operation */
router.post('/edit/:id', contactController.processEditPage);

/* Get to perform Deletion - Delete operation */
router.get('/delete/:id', contactController.performDelete);

module.exports = router;