let express = require('express');
const event = require('../models/event');
let router = express.Router();

// create a reference to the model
//let Event = require('../models/event');

module.exports.displayHomePage = (req, res, next) => {
    res.render('index', {title: 'Home'});
}

module.exports.displayEventPage = (req, res, next) => {
    res.render('event', {title: 'Events'});
}

module.exports.displayCoursePage = (req, res, next) => {
    res.render('course', {title: 'Course'})
}

module.exports.displayFacultyPage = (req, res, next) => {
    res.render('faculty', {title: "Faculty"})
}

module.exports.displayStudentPage = (req, res, next) => {
    res.render('student', {title: "Student"})
}

// module.exports.displayEventPage = (req, res, next) => {
//     Event.find((err, eventList) => {
//         console.log("event list called")
//         if(err)
//         {
//             return console.log(err);
//         }
//         else
//         {
//             console.log(eventList);

//             // res.render('eventlist', {title: 'Events', EventList: eventList});      
//         }
//     });
// }
// module.exports.performDelete = (req, res, next) => {
//     console.log("perform delete called")
//     let id = req.params.id;
//     console.log("delete id", id)
//     Event.deleteOne({_id: id}, (err) => {
//         if(err)
//         {
//             console.log(err);
//             // res.end(err);
//         }
//         else
//         {
//             console.log("Delete succesfully")
//         }
//     });
// }
