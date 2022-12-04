let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let jwt = require('jsonwebtoken');

let passport = require('passport');

<<<<<<< Updated upstream
// connect to our Event Model
let Event = require('../models/course');
=======
// connect to our Course Model
let Course = require('../models/course');
>>>>>>> Stashed changes

// helper function for guard purposes
function requireAuth(req, res, next)
{
    // check if the user is logged in
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}

<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
let courseController = require('../controllers/course');

/* GET Route for the Course List page - READ Operation */
router.get('/', courseController.displayCourseList);

/* GET Route for displaying the Add page - CREATE Operation */
router.get('/add', requireAuth, courseController.displayAddCoursePage);

/* POST Route for processing the Add page - CREATE Operation */
router.post('/add', requireAuth, courseController.processAddPage);

/* GET Route for displaying the Edit page - UPDATE Operation */
router.get('/edit/:id', requireAuth, courseController.displayEditPage);

/* POST Route for processing the Edit page - UPDATE Operation */
router.post('/edit/:id', requireAuth, courseController.processEditPage);

/* GET to perform  Deletion - DELETE Operation */
router.get('/delete/:id', requireAuth, courseController.performDelete);


module.exports = router;