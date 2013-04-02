/**
 * Module dependencies.
**/

var http = require('http')
	, express = require('express');

var app = express()
		.use(express.static('public'))
		.set('view engine', 'jade')
		.set('views', __dirname + '/views')
	, server = http.createServer(app);



/**
 * Routing.
 */
	
app.get('/', function(req,res,next){
	res.render('home');
});

app.post('/:dataType', function(req,res,next){
	
});

app.put('/:dataType', function(req,res,next){
	
});

app.delete('/:dataType', function(req,res,next){
	
});

app.head('/:dataType', function(req,res,next){
	
});




/**
 * Application Logic.
**/



/**
 * Listen.
**/


server.listen(3000);
