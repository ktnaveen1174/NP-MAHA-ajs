let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');
let eventController = require('../controllers/event');
let courseController = require('../controllers/course');
let facultController = require('../controllers/faculty');
let studentController = require('../controllers/student');
// let contactController = require('../controllers/contact');
//let loginController = require('../controllers/login')



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

/* GET contact page */
router.get('/contact', indexController.displayContactPage);

// /* GET login page */
// router.get('/login', indexController.displayLoginPage);

/* GET about page */
router.get('/about', indexController.displayAboutPage);

/* GET Route for displaying the Login page */
router.get('/login', indexController.displayLoginPage);

/* POST Route for processing the Login page */
router.post('/login', indexController.processLoginPage);

/* GET Route for displaying the Register page */
router.get('/register', indexController.displayRegisterPage);

/* POST Route for processing the Register page */
router.post('/register', indexController.processRegisterPage);

/* GET to perform UserLogout */
router.get('/logout', indexController.performLogout);




module.exports = router;
