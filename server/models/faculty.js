let mongoose = require('mongoose');

// create a model class
let facultyModel = mongoose.Schema({
    name: String,
    student_id: String,
    course_id: String
},
{
    collection: "faculty"
});

module.exports = mongoose.model('Faculty', facultyModel);