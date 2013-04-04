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

// Allow access from anywhere so people can test in browser consoles, for example.
app.use(function(req,res,next){
	res.set('Access-Control-Allow-Origin', '*');
	next();
})
	
app.get('/', function(req,res,next){
	res.render('home');
});

app.all('/status/:code', function(req,res,next){
	res.send(req.params.code, 'Arbitrary status message!');
});

app.get('/:dataType', function(req,res,next){
	// see here for a full list of data types that i could use: http://en.wikipedia.org/wiki/Internet_media_type
	switch(req.params.dataType) {
		case 'plain':
			res.set('Content-Type', 'text/plain');
			res.send('Here\'s just some plain ol weirdo text for you.');
			break;

		case 'html':
			res.send('<b>Congrats! Here\'s some HTML!</b>');
			break;

		case 'json':
			res.json({"example response": "in json"});
			break;

		case 'xml':
			res.set('Content-Type', 'text/xml');
			res.send('<this><is><ridiculous>XML is a horrible way to mark up data. Just use JSON.</ridiculous></is></this>');
			break;

		case 'jsonp':
			break;

		default:
			break;
	}
});

app.post('/:dataType', function(req,res,next){
	res.render('coming-soon');
});

app.put('/:dataType', function(req,res,next){
	res.render('coming-soon');
});

app.delete('/:dataType', function(req,res,next){
	res.render('coming-soon');
});

app.head('/:dataType', function(req,res,next){
	res.render('coming-soon');
});




/**
 * Application Logic.
**/



/**
 * Listen.
**/


server.listen(3000);
