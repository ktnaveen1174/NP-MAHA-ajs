let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let jwt = require('jsonwebtoken');

let passport = require('passport');

// connect to our Course Model
let Faculty = require('../models/faculty');


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

let facultyController = require('../controllers/faculty');

/* GET Route for the Faculty List page - READ Operation */
router.get('/',  facultyController.displayFacultyList);

/* GET Route for displaying the Add page - CREATE Operation */
router.get('/add', requireAuth, facultyController.displayAddFacultyPage);

/* POST Route for processing the Add page - CREATE Operation */
router.post('/add', requireAuth, facultyController.processAddPage);

/* GET Route for displaying the Edit page - UPDATE Operation */
router.get('/edit/:id', requireAuth, facultyController.displayEditPage);

/* POST Route for processing the Edit page - UPDATE Operation */
router.post('/edit/:id', requireAuth, facultyController.processEditPage);

/* GET to perform  Deletion - DELETE Operation */
router.get('/delete/:id', requireAuth, facultyController.performDelete);


module.exports = router;