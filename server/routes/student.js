let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let jwt = require('jsonwebtoken');

let passport = require('passport');

// connect to our Event Model
let Event = require('../models/student');

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

let studentController = require('../controllers/student');

/* GET Route for the Faculty List page - READ Operation */
router.get('/', studentController.displayStudentList);

/* GET Route for displaying the Add page - CREATE Operation */
router.get('/add', requireAuth, studentController.displayAddStudentPage);

/* POST Route for processing the Add page - CREATE Operation */
router.post('/add', requireAuth, studentController.processAddPage);

/* GET Route for displaying the Edit page - UPDATE Operation */
router.get('/edit/:id', requireAuth, studentController.displayEditPage);

/* POST Route for processing the Edit page - UPDATE Operation */
router.post('/edit/:id', requireAuth, studentController.processEditPage);

/* GET to perform  Deletion - DELETE Operation */
router.get('/delete/:id', requireAuth, studentController.performDelete);


module.exports = router;