let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// create a reference to the model
let Student = require('../models/student');

module.exports.displayStudentList = (req, res, next) => {
    console.log("Display function")
    Student.find((err, studentList) => {
        console.log("student list called")
        if(err)
        {
            return console.log(err);
        }
        else
        {
            //console.log(eventList);
            console.log("Student list", studentList)
            res.render('student', {title: 'Students', StudentList: studentList});      
        }
    });
}
module.exports.displayAddStudentPage = (req, res, next) => {
    console.log("Display add page called")
    res.render('student/add', {title: 'Add Student'})          
}

module.exports.processAddPage = (req, res, next) => {
    let newStudent = Student({
        "name": req.body.name,
        "email": req.body.email,
        "password": req.body.password,
        "phone": req.body.phone,
        "gender": req.body.gender,
        "semester": req.body.semester,
        "address": req.body.address,
        "birthDate": req.body.birthDate,
        "course_id": req.body.course_id
    });

    console.log("newStudent", newStudent)
    Student.create(newStudent, (err, courseList) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //console.log(eventList);
            res.redirect('/student')
        }
    });

}

module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    Student.findById(id, (err, studentToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.render('student/edit', {title: 'Edit Student', student: studentToEdit})
        }
    });
}
module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id

    let updatedStudent = Student({
        "_id": id,
        "name": req.body.name,
        "email": req.body.email,
        "password": req.body.password,
        "phone": req.body.phone,
        "gender": req.body.gender,
        "semester": req.body.semester,
        "address": req.body.address,
        "birthDate": req.body.birthDate,
        "course_id": req.body.course_id
    });

    Student.updateOne({_id: id}, updatedStudent, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the event list
            res.redirect('/student');
        }
    });
}


module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;
    //console.log("delete id", id)
    Student.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/student');
        }
    });
}

