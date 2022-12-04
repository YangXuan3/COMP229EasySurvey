/*
    File name: survey.js
    Group name: Easy Survey
    Session: COMP229004
    Date: Dec 4, 2022
*/
let mongoose = require('mongoose');
let surveyModel = mongoose.Schema({
    title: String,
    type:String,
    startdate: Date,
    enddate: Date,
    q1: String,
    q2: String,
    q3: String,
    q4: String,
    q5: String
},

{
    collection:"surveys"
});

module.exports = mongoose.model('survey',surveyModel);