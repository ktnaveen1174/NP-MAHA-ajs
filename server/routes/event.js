let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// connect to our Event Model
let Event = require('../models/event');

let eventController = require('../controllers/event');

/* GET Route for the Event List page - READ Operation */
router.get('/', eventController.displayEventList);

/* GET Route for displaying the Add page - CREATE Operation */
router.get('/add', eventController.displayAddPage);

/* POST Route for processing the Add page - CREATE Operation */
router.post('/add', eventController.processAddPage);

/* GET Route for displaying the Edit page - UPDATE Operation */
router.get('/edit/:id', eventController.displayEditPage);

/* POST Route for processing the Edit page - UPDATE Operation */
router.post('/edit/:id', eventController.processEditPage);

/* GET to perform  Deletion - DELETE Operation */
router.get('/delete/:id', eventController.performDelete);


module.exports = router;