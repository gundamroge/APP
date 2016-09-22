var express = require('express');
var router = express.Router();

//user posting comments
router.post('/comments', function(req,res){
	//upodates the comments
//LOGIC <--------!!!!!!

	res.redirect('/');
});

//User clicks on lineup <------ BUTTERFLY EFFECT
router.post('/lineup', function(req,res){
	//updates the lineup thinghy of that particular commodity
		//LOGIC <--------!!!!!!
	res.redirect('/');
});


//user checks in on the transaction of the certain commodity
router.post('/transaction:id', function(req,res){
	// req.params.id
	// do something ....
	//user decides on what to do with transaction
	// the holy craps of logics, goes here
	res.redirect('/');

});
//user checks out others lelelele
router.get('/others:id' , function(req,res){
	//req.params.id
	//do .....
	// user checks out others info

	res.render('info_others' , {
		//info page of others
		///		do something	////
		// person_id : req.params.id
		////					////
	});
});

module.exports = router;