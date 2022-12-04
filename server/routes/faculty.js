let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let facultyController = require('../controllers/faculty');

/* GET Route for the Faculty List page - READ Operation */
router.get('/', facultyController.displayFacultyList);

/* GET Route for displaying the Add page - CREATE Operation */
router.get('/add', facultyController.displayAddFacultyPage);

/* POST Route for processing the Add page - CREATE Operation */
router.post('/add', facultyController.processAddPage);

/* GET Route for displaying the Edit page - UPDATE Operation */
router.get('/edit/:id', facultyController.displayEditPage);

/* POST Route for processing the Edit page - UPDATE Operation */
router.post('/edit/:id', facultyController.processEditPage);

/* GET to perform  Deletion - DELETE Operation */
router.get('/delete/:id', facultyController.performDelete);


module.exports = router;