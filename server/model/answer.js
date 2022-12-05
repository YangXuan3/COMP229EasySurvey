/*
    File name: answer.js
    Group name: Easy Survey
    Session: COMP229004
    Date: Dec 4, 2022
*/
let mongoose = require('mongoose');
let answerModel = mongoose.Schema({
    name: String,
    a1: String,
    a2: String,
    a3: String,
    a4: String,
    a5: String,
    confirmed: Boolean
},

{
    collection:"answers"
});

module.exports = mongoose.model('answer',answerModel);