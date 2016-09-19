var express = require('express');
var app = express();
var mysql = require('mysql');
var path = require('path');
var bodyParser = require('body-parser');
var formidable = require('formidable'); // what does it do i forgot <--- needa check

// require mysql connection <! --!!!----- but doesnt work for my pc so need da figure this out, might try with mongo Nosql database with 
//my pc first, thatll need to require the 'mongoose' package t=in order to use mongoDB
var connection = require('./models/mysql_connection');
 //require mongoose for nosql just in case
require('./models/mongoose_database');


//app initiation
app.disable('x-powered-by');//protect server imformation from header
app.set('view engine' , 'ejs');
app.set('views' , path.join(__dirname ,'views'));


//middleware
app.use(bodyParser.urlencoded({ extended : true }));//
app.use(bodyParser);
//讓此目錄下的html , css , javascript都可以作為static file
app.use(express.static(__dirname + '/public')); // static files path <--- !! important!!!


app.use(require('./routes/homepageRoute')); // routers of the homepage
app.use(require('info' , './routes/personalRoute')); // routers of the personal info page , adds 'info' in front of url path
app.use(require('commodities' , './routes/commoditiesRoutes'));// routers of commodities page , adds 'commodities' in front of url path




//routes
app.get('/' , function(req,res){
	res.render('index',{
		//
		// need database files
		//
	});
});



/**
app.get('', function(req,res){
	//do something

});


app.post('', function(req,res){
	//do something

});


**/



app.get('*' , function(req,res){
	// if route is not defined, redirect rigt back to home page without saying shit
	// might use it on buttons to return to home page lolz, but this really sucks, for now
	res.redirect('/');
});



var port = process.env.PORT || 3000;

app.listen(port, function(){
	console.log('App running on port : ' + port);
});