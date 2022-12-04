let mongoose = require('mongoose');

// create a model class
let eventModel = mongoose.Schema({
    name: String,
    description: String,
    Date: String,
    TimeRanges: String,
    location: String
},
{
    collection: "events"
});

module.exports = mongoose.model('Event', eventModel);