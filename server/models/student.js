let mongoose = require('mongoose');

// create a model class
let studentModel = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    phone: String,
    gender: String,
    semester: String,
    address: String,
    birthDate: String,
    course_id: String
},
{
    collection: "student"
});

module.exports = mongoose.model('Student', studentModel);