var express = require('express');
var router = express.Router();

router.get('/genre',function(req,res){
	//the genre column
	// change the commodities to corresponding genre
	res.redirect('/');
});



//////////////////////////////////////
//goes to the info page, lets 'personalRoutes.js' handle it
router.get('/info', function(req,res){
	// get personal info
	//renders new page
	res.render('info',{




	});
});

//goes to the commodity page, lets 'commoditiesRoutes.js' handle it
router.get('/commodities' , function(req,res){
	res.render('commodities',{
		//commodity variables from the database


	});
});



//////////////////////////
router.post('/search', function(req,res){
	//the search bar
	// ???????
	res.render('search', {
		// shits for search results

	});
});


router.get('/notification', function(req,res){
	//the notifications
	res.render('noification',{
		// render the notification page(should i just change the 'index' page placeholder instead???)


	});
});

module.exports = router;