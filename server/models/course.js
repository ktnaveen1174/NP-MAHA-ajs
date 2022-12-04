let mongoose = require('mongoose');

// create a model class
let courseModel = mongoose.Schema({
    name: String,
    detail: String
},
{
    collection: "courses"
});

module.exports = mongoose.model('Course', courseModel);