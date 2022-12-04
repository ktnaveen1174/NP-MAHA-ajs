let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let courseController = require('../controllers/course');

/* GET Route for the Course List page - READ Operation */
router.get('/', courseController.displayCourseList);

/* GET Route for displaying the Add page - CREATE Operation */
router.get('/add', courseController.displayAddCoursePage);

/* POST Route for processing the Add page - CREATE Operation */
router.post('/add', courseController.processAddPage);

/* GET Route for displaying the Edit page - UPDATE Operation */
router.get('/edit/:id', courseController.displayEditPage);

/* POST Route for processing the Edit page - UPDATE Operation */
router.post('/edit/:id', courseController.processEditPage);

/* GET to perform  Deletion - DELETE Operation */
router.get('/delete/:id', courseController.performDelete);


module.exports = router;