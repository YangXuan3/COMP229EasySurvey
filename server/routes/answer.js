let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');
let answerController = require('../controllers/answer');
function requireAuth(req,res,next)
{
    //check if the user is logged in
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}
//connect to answer model
let Answer = require('../model/answer');

//GET ROUTE for the answer page - READ OPERATION
router.get('/',answerController.displayanswer);
/*GET Route for displaying the Add page - CREATE operation*/
router.get('/add',requireAuth,answerController.displayAddPage);

/*POST Route for processing the Add page - CREATE operation*/
router.post('/add',requireAuth,answerController.processAddPage);



/*GET Route for displaying the Edit page - UPDATE operation*/
router.get('/update/:id',requireAuth,answerController.displayUpdatePage);
/*POST Route for processing the Edit page - UPDATE operation*/
router.post('/update/:id',requireAuth,answerController.processUpdatePage);
/*GET to perform Deletion - DELETE operation*/
router.get('/delete/:id',requireAuth,answerController.performDelete);


module.exports = router;