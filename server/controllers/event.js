let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// create a reference to the model
let Event = require('../models/event');

module.exports.displayEventList = (req, res, next) => {
    console.log("Display function")
    Event.find((err, eventList) => {
        console.log("event list called")
        if(err)
        {
            return console.log(err);
        }
        else
        {
            //console.log(eventList);

            res.render('event', {title: 'Events', EventList: eventList});      
        }
    });
}
module.exports.displayAddPage = (req, res, next) => {
    res.render('event/add', {title: 'Add Event'})          
}

module.exports.processAddPage = (req, res, next) => {
    let newEvent = Event({
        "name": req.body.name,
        "description": req.body.description,
        "Date": req.body.Date,
        "TimeRanges":req.body.TimeRanges,
        "location":req.body.location
    });

    Event.create(newEvent, (err, eventList) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //console.log(eventList);
            res.redirect('/event')
        }
    });

}

module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    Event.findById(id, (err, eventToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.render('event/edit', {title: 'Edit Event', event: eventToEdit})
        }
    });
}
module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id

    let updatedEvent = Event({
        "_id": id,
        "name": req.body.name,
        "description": req.body.description,
        "Date": req.body.Date,
        "TimeRanges":req.body.TimeRanges,
        "location": req.body.location
    });

    Event.updateOne({_id: id}, updatedEvent, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the event list
            res.redirect('/event');
        }
    });
}


module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;
    //console.log("delete id", id)
    Event.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/event');
        }
    });
}

