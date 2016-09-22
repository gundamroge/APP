var express = require('express');
var router = express.Router();
//has '/info' added in front of its route from app.js middleware

//the personal image
router.get('/img' , function(req,res){
	//the img page, to change it or look at it
	res.render('personal_img' , {
		//picture from database
		// shows out the large picture <------- should b able to change with jquery i hop -------------------------
	});
});
router.post('/img/change', function(req,res){
	//user changing the img
	//LIGIC!!!!!! <---- HERE!!!!
	res.redirect('/');
		//changed picture
});
//personal info
router.post('/change', function(req,res){
	//user changing the img

	// logic runs HERE!!@



	res.redirect('/');
		//changed personal info text

});
//transaction
router.get('/others:id' , function(req,res){
	//the others info page, to look at it, and to leave comments too
	res.render('info_others' , {
		//info page of others
		////					////
		// person_id : req.params.id
		////					////
	});
});
router.post('/others:id/comments', function(req,res){
	// posting the comments
	// methods goes after this
	///
	//
	//
	res.redirect('/others:id');
});
/**
// favorites
router.get('/favorites', function(req,res){
	//the personal favorite from database

});


router.get('tansaction_notification', function(req,res){
	

});
**/


//repository <-------------!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
router.get('/repository',function(req,res){
	//shows the repo, and able to change it and update it
	res.render('repository',{
		// repo from database

	});
});


router.post('/repository/add',function(req,res){
	//adds new stuff to the repo




	res.redirect('/repository'); // <--------- still has '/info' in from of it from app.js
		// repo from database
		//and also add to database
});

router.post('/repository/update',function(req,res){
	//updates old stuff to the repo




	res.redirect('/repository'); // <--------- still has '/info' in from of it from app.js
		// repo from database
		//and also add to database
		
});

// THERE R ALSO CHANGES TO THE COMMODITIES IN THE REPO OF ITS IMAGE AND GENRE AND SHIT <--------!!!!!!!!!!!!!!
// NEED TO THINK OF IT LATER ON, THIS IS JUST AN OUTLINE FORMAT


module.exports = router;
