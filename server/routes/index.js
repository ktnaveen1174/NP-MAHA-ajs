let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');
let eventController = require('../controllers/event');
let courseController = require('../controllers/course');
let facultController = require('../controllers/faculty');
let studentController = require('../controllers/student')
//const event = require('../models/event');


/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET Event page. */
router.get('/event', eventController.displayEventList);

/* GET course page */
router.get('/course', courseController.displayCourseList);

/* GET faculty page */
router.get('/faculty', facultController.displayFacultyList)

/* GET student page */
router.get('/student', studentController.displayStudentList);




module.exports = router;
