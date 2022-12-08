/*
    File name: answer.js
    Group name: Easy Survey
    Session: COMP229004
    Date: Dec 4, 2022
*/
let express = require ('express');
let router = express.Router();
let mongoose = require('mongoose');
let jwt = require('jsonwebtoken');
let answer = require('../model/answer');
module.exports.displayanswer = (req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    answer.find((err,answer)=>{
        if(err)
        {
        return console.error(err);
        }
        else
        {
         //console.log(answer);
         res.render('answer/list', {title:'Answer', answer:answer, displayName: req.user ? req.user.displayName : ''});
        }
    });
}

module.exports.displayAddPage = (req,res,next)=>{
    res.render('answer/add',{title:'Create answer', displayName: req.user ? req.user.displayName : ''});

}

module.exports.processAddPage = (req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    let newAnswer = answer({
        "name": req.body.name,
        "a1":req.body.a1,
        "a2":req.body.a2,
        "a3":req.body.a3,
        "a4":req.body.a4,
        "a5":req.body.a5,
        "confirmed":false
    });
    answer.create(newAnswer,(err,answer)=>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
        res.redirect('/answer');
        }
    });
    }
    
        module.exports.displayUpdatePage = (req,res,next)=>{
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            let id = req.params.id;
            answer.findById(id,(err,answerToEdit)=>{
                if(err)
                {
                    console.log(err);
                    res.end(err);
                }
                else
                {
                    res.render('answer/update',{title:'Edit Answer', answer: answerToEdit, displayName: req.user ? req.user.displayName : ''});
                    
                }
            });
            }

        module.exports.processUpdatePage = (req,res,next)=>{
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            let id = req.params.id
            console.log(req.body);
            let updatedanswer = answer({
                "_id":id,
                "name": req.body.name,
                "a1":req.body.a1,
                "a2":req.body.a2,
                "a3":req.body.a3,
                "a4":req.body.a4,
                "a5":req.body.a5,
                "confirmed":false
            });
            answer.updateOne({_id:id}, updatedanswer,(err)=>{
                if(err)
                {
                    console.log(err);
                    res.end(err);
                }
                else
                {
                    res.redirect('/answer');
                }
            });
        }

        module.exports.performDelete= (req,res,next)=>{
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            let id = req.params.id;
            answer.remove({_id:id},(err)=>{
                if(err)
                {
                    console.log(err);
                    res.end(err);
                }
                else
                {
                    res.redirect('/answer');
                }
            });
            }