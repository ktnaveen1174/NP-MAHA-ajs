let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// create a reference to the model
let Faculty = require('../models/faculty');

module.exports.displayFacultyList = (req, res, next) => {
    console.log("Display function")
    Faculty.find((err, facultyList) => {
        console.log("faculty list called")
        if(err)
        {
            return console.log(err);
        }
        else
        {
            //console.log(eventList);

            res.render('faculty', {title: 'Faculty', FacultyList: facultyList});      
        }
    });
}
module.exports.displayAddFacultyPage = (req, res, next) => {
    console.log("Display add page called")
    res.render('faculty/add', {title: 'Add Faculty'})          
}

module.exports.processAddPage = (req, res, next) => {
    let newFaculty = Faculty({
        "name": req.body.name,
        "student_id": req.body.student_id,
        "course_id": req.body.course_id
    });

    Faculty.create(newFaculty, (err, courseList) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //console.log(eventList);
            res.redirect('/faculty')
        }
    });

}

module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    Faculty.findById(id, (err, facultyToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.render('faculty/edit', {title: 'Edit Faculty', faculty: facultyToEdit})
        }
    });
}
module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id

    let updatedFaculty = Faculty({
        "_id": id,
        "name": req.body.name,
        "student_id": req.body.student_id,
        "course_id": req.body.course_id
    });

    Faculty.updateOne({_id: id}, updatedFaculty, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the event list
            res.redirect('/faculty');
        }
    });
}


module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;
    //console.log("delete id", id)
    Faculty.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/faculty');
        }
    });
}

