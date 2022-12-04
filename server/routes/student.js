let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let studentController = require('../controllers/student');

/* GET Route for the Faculty List page - READ Operation */
router.get('/', studentController.displayStudentList);

/* GET Route for displaying the Add page - CREATE Operation */
router.get('/add', studentController.displayAddStudentPage);

/* POST Route for processing the Add page - CREATE Operation */
router.post('/add', studentController.processAddPage);

/* GET Route for displaying the Edit page - UPDATE Operation */
router.get('/edit/:id', studentController.displayEditPage);

/* POST Route for processing the Edit page - UPDATE Operation */
router.post('/edit/:id', studentController.processEditPage);

/* GET to perform  Deletion - DELETE Operation */
router.get('/delete/:id', studentController.performDelete);


module.exports = router;