let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');
let surveyController = require('../controllers/survey');
function requireAuth(req,res,next)
{
    //check if the user is logged in
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}
//connect to survey model
let Survey = require('../model/survey');

//GET ROUTE for the survey page - READ OPERATION
router.get('/',surveyController.displaysurvey);
/*GET Route for displaying the Add page - CREATE operation*/
router.get('/add',requireAuth,surveyController.displayAddPage);

/*POST Route for processing the Add page - CREATE operation*/
router.post('/add',requireAuth,surveyController.processAddPage);



/*GET Route for displaying the Edit page - UPDATE operation*/
router.get('/update/:id',requireAuth,surveyController.displayUpdatePage);
/*POST Route for processing the Edit page - UPDATE operation*/
router.post('/update/:id',requireAuth,surveyController.processUpdatePage);
/*GET to perform Deletion - DELETE operation*/
router.get('/delete/:id',requireAuth,surveyController.performDelete);
module.exports = router;