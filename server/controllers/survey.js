/*
    File name: survey.js
    Group name: Easy Survey
    Session: COMP229004
    Date: Dec 4, 2022
*/
let express = require ('express');
let router = express.Router();
let mongoose = require('mongoose');
let jwt = require('jsonwebtoken');
let survey = require('../model/survey');
module.exports.displaysurvey = (req,res,next)=>{
    survey.find((err,survey)=>{
        if(err)
        {
        return console.error(err);
        }
        else
        {
         //console.log(survey);
         res.render('survey/list', {title:'Survey', survey:survey, displayName: req.user ? req.user.displayName : ''});
        }
    });
}

module.exports.displayAddPage = (req,res,next)=>{
    res.render('survey/add',{title:'Create survey', displayName: req.user ? req.user.displayName : ''});

}

module.exports.processAddPage = (req,res,next)=>{
    let newSurvey = survey({
        "title": req.body.title,
        "type":req.body.type,
        "startdate":req.body.startdate,
        "enddate":req.body.enddate,
        "q1":req.body.q1,
        "q2":req.body.q2,
        "q3":req.body.q3,
        "q4":req.body.q4,
        "q5":req.body.q5
    });
    survey.create(newSurvey,(err,survey)=>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
        res.redirect('/survey');
        }
    });
    }
    
        module.exports.displayUpdatePage = (req,res,next)=>{
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            let id = req.params.id;
            survey.findById(id,(err,surveyToEdit)=>{
                if(err)
                {
                    console.log(err);
                    res.end(err);
                }
                else
                {
                    res.render('survey/update',{title:'Edit Survey', survey: surveyToEdit, displayName: req.user ? req.user.displayName : ''});
                    
                }
            });
            }

        module.exports.processUpdatePage = (req,res,next)=>{
            let id = req.params.id
            console.log(req.body);
            let updatedsurvey = survey({
                "_id":id,
                "title": req.body.title,
                "type": req.body.type,
            "startdate":req.body.startdate,
            "enddate":req.body.enddate,
            "q1":req.body.q1,
            "q2":req.body.q2,
            "q3":req.body.q3,
            "q4":req.body.q4,
            "q5":req.body.q5
            });
            survey.updateOne({_id:id}, updatedsurvey,(err)=>{
                if(err)
                {
                    console.log(err);
                    res.end(err);
                }
                else
                {
                    res.redirect('/survey');
                }
            });
        }

        module.exports.performDelete= (req,res,next)=>{
            let id = req.params.id;
            survey.remove({_id:id},(err)=>{
                if(err)
                {
                    console.log(err);
                    res.end(err);
                }
                else
                {
                    res.redirect('/survey');
                }
            });
            }