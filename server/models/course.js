let mongoose = require('mongoose');

// create a model class
let courseModel = mongoose.Schema({
    school: String,
    courseName: String,
    length: String,
    credentials: String,
    location: String
},
{
    collection: "courses"
});

module.exports = mongoose.model('Course', courseModel);