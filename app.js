/**
 * Module dependencies and app extension.
**/


var http = require('http')
	, express = require('express');

var app = express()
		.use(express.static('public'))
		.set('view engine', 'jade')
		.set('views', __dirname + '/views')
		// Allow access from anywhere so people can test in browser consoles, for example.
		.use(function(req,res,next){
			res.set('Access-Control-Allow-Origin', '*');
			next();
		});
		
var server = http.createServer(app);



server.listen(80);
