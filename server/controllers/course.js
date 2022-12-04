let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let jwt = require('jsonwebtoken');
// create a reference to the model
let Course = require('../models/course');

module.exports.displayCourseList = (req, res, next) => {
    console.log("Display function")
    Course.find((err, courseList) => {
        console.log("course list called")
        if(err)
        {
            return console.log(err);
        }
        else
        {
            //console.log(eventList);

            res.render('course', {title: 'Courses', CourseList: courseList, displayName: req.user ? req.user.displayName : ''});      
        }
    });
}
module.exports.displayAddCoursePage = (req, res, next) => {
    console.log("Display add page called")
    res.render('course/add', {title: 'Add Course', displayName: req.user ? req.user.displayName : ''})          
}

module.exports.processAddPage = (req, res, next) => {
    let newCourse = Course({
        "name": req.body.name,
        "detail": req.body.detail
    });

    Course.create(newCourse, (err, courseList) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //console.log(eventList);
            res.redirect('/course')
        }
    });

}

module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    Course.findById(id, (err, courseToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.render('course/edit', {title: 'Edit Course', course: courseToEdit, displayName: req.user ? req.user.displayName : ''})
        }
    });
}
module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id

    let updatedCourse = Course({
        "_id": id,
        "name": req.body.name,
        "detail": req.body.detail
    });

    Course.updateOne({_id: id}, updatedCourse, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the event list
            res.redirect('/course');
        }
    });
}


module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;
    //console.log("delete id", id)
    Course.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/course');
        }
    });
}

