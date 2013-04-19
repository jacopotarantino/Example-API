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


/**
 * Volatile data.
 */


var exampleObject = {
	"id":"49020834"
	, "title":"My First Post Sample"
	, "slug":"my-first-post-sample"
	, "content":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor dicta in at error ipsam vel ipsum odit tempora ipsa nulla facere quas dolore eligendi incidunt esse molestias aut. Explicabo optio eaque pariatur modi atque aperiam illo sed velit doloribus nam molestiae unde ab sunt reprehenderit recusandae earum blanditiis quibusdam fuga maiores placeat numquam magni labore repudiandae esse laborum ipsum aliquid? Cupiditate hic quia dolor facilis saepe eligendi error recusandae quo magnam vel? Dicta libero magni voluptates porro ducimus quibusdam in commodi. Repellat itaque ad magni doloremque sed similique alias debitis esse corporis eveniet deserunt et molestias placeat quia impedit velit."
	, "date-created":"2013-03-26-13-59-59"
	, "date-modified":"2013-04-09-15-01-49"
	, "thumbnail":"http://lorempixel.com/400/400"
	, "tags":"web development, api, demo, example, node"
};

var plainText = "id: 49020834\ntitle: My First Post Sample\nslug: my-first-post-sample\ncontent: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor dicta in at error ipsam vel ipsum odit tempora ipsa nulla facere quas dolore eligendi incidunt esse molestias aut. Explicabo optio eaque pariatur modi atque aperiam illo sed velit doloribus nam molestiae unde ab sunt reprehenderit recusandae earum blanditiis quibusdam fuga maiores placeat numquam magni labore repudiandae esse laborum ipsum aliquid? Cupiditate hic quia dolor facilis saepe eligendi error recusandae quo magnam vel? Dicta libero magni voluptates porro ducimus quibusdam in commodi. Repellat itaque ad magni doloremque sed similique alias debitis esse corporis eveniet deserunt et molestias placeat quia impedit velit.\ndate-created: 2013-03-26-13-59-59\ndate-modified: 2013-04-09-15-01-49\nthumbnail: http://lorempixel.com/400/400\ntags: web development, api, demo, example, node";

var vcardDemo = "BEGIN:VCARD\nVERSION:4.0\nN:Gump;Forrest;;;\nFN:Forrest Gump\nORG:Bubba Gump Shrimp Co.\nTITLE:Shrimp Man\nPHOTO;MEDIATYPE=image/gif:http://www.example.com/dir_photos/my_photo.gif\nTEL;TYPE=work,voice;VALUE=uri:tel:+1-111-555-1212\nTEL;TYPE=home,voice;VALUE=uri:tel:+1-404-555-1212\nADR;TYPE=work;LABEL=\"100 Waters Edge\\nBaytown, LA 30314\\nUnited States of America\"\n  :;;100 Waters Edge;Baytown;LA;30314;United States of America\nADR;TYPE=home;LABEL=\"42 Plantation St.\\nBaytown, LA 30314\\nUnited States of America\"\n :;;42 Plantation St.;Baytown;LA;30314;United States of America\nEMAIL:forrestgump@example.com\nREV:20080424T195243Z\nEND:VCARD";

var cssDemo = '*, *:before, *:after {\n\t-webkit-box-sizing: border-box;\n\t-moz-box-sizing: border-box;\n\tbox-sizing: border-box;\n}\nhtml {\n\tfont-size: 62.5%\n}\nbody {\n\tbackground: #fff;\n\tfont-family: Georgia, Times, serif;\n\tfont-weight: normal;\n\tfont-style: normal;\n\tfont-size: 15px;\n\tline-height: 1;\n\tcolor: #444;\n\tposition: relative;\n\t-webkit-font-smoothing: antialiased;\n}\na {\n\tcolor: #d22;\n\ttext-decoration: none;\n\tline-height: inherit;\n}\na img { border: none }\n\np a, p a:visited {\n\tline-height: inherit\n}\n.left {\n\tfloat: left\n}\n.right {\n\tfloat: right\n}\n';

var exampleCSV = 'id, title, slug, content, date-created, date-modified, thumbnail, tags\n49020834, My First Post Sample, my-first-post-sample, Lorem ipsum dolor sit amet&#44; consectetur adipisicing elit. Dolor dicta in at error ipsam vel ipsum odit tempora ipsa nulla facere quas dolore eligendi incidunt esse molestias aut. Explicabo optio eaque pariatur modi atque aperiam illo sed velit doloribus nam molestiae unde ab sunt reprehenderit recusandae earum blanditiis quibusdam fuga maiores placeat numquam magni labore repudiandae esse laborum ipsum aliquid? Cupiditate hic quia dolor facilis saepe eligendi error recusandae quo magnam vel? Dicta libero magni voluptates porro ducimus quibusdam in commodi. Repellat itaque ad magni doloremque sed similique alias debitis esse corporis eveniet deserunt et molestias placeat quia impedit velit., 2013-03-26-13-59-59, 2013-04-09-15-01-49, http://lorempixel.com/400/400, web development&#44; api&#44; demo&#44; example&#44; node';

var exampleXML = "<post>\n\t<id>49020834</id>\n\t<title>My First Post Sample</title>\n\t<slug>my-first-post-sample</slug>\n\t<content>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor dicta in at error ipsam vel ipsum odit tempora ipsa nulla facere quas dolore eligendi incidunt esse molestias aut. Explicabo optio eaque pariatur modi atque aperiam illo sed velit doloribus nam molestiae unde ab sunt reprehenderit recusandae earum blanditiis quibusdam fuga maiores placeat numquam magni labore repudiandae esse laborum ipsum aliquid? Cupiditate hic quia dolor facilis saepe eligendi error recusandae quo magnam vel? Dicta libero magni voluptates porro ducimus quibusdam in commodi. Repellat itaque ad magni doloremque sed similique alias debitis esse corporis eveniet deserunt et molestias placeat quia impedit velit.</content>\n\t<date-created>2013-03-26-13-59-59</date-created>\n\t<date-modified>2013-04-09-15-01-49</date-modified>\n\t<thumbnail>http://lorempixel.com/400/400</thumbnail>\n\t<taggroup>\n\t\t<tag>web development</tag>\n\t\t<tag>api</tag>\n\t\t<tag>demo</tag>\n\t\t<tag>example</tag>\n\t\t<tag>node</tag>\n\t</taggroup>\n</post>";


/**
 * Routing and responses.
 */


// render the homepage.
app.get('/', function(req,res,next){
	res.render('home');
});

// render the obsolete page.
app.get('/obsolete', function(req,res,next){
	res.render('obsolete');
});

// just return an arbitrary status.
app.all('/status/:code', function(req,res,next){
	res.send(req.params.code, 'Error ' + req.params.code + ': Here is the status you wanted to receive!');
});

// responses for all get requests.
// see here for a full list of data types: http://en.wikipedia.org/wiki/Internet_media_type
app.get('/:dataType', function(req,res,next){
	switch(req.params.dataType) {
		
		// All the "text/foo" data types.
			
		case 'cmd':
			res.render('obsolete');
			break;
		
		case 'css':
			res.set('Content-Type', 'text/css');
			res.send(cssDemo);
			break;
		
		case 'csv':
			res.set('Content-Type', 'text/csv');
			res.send(exampleCSV);
			break;
			
		case 'html':
			res.render('example-post');
			break;
	
		case 'javascript':
			res.render('obsolete');
			break;
		
		case 'json':
			res.set('Content-Type', 'text/json');
			res.json(exampleObject);
			break;

		case 'jsonp':
			if(req.query.callback) {
				res.set('Content-Type', 'text/jsonp');
				res.send( escapeHtml(req.query.callback) + '(' + JSON.stringify(exampleObject) + ')');
			}
			else {
				res.send(400, 'You must specify a callback by adding "?callback=exampleCBFunction" to the query');
			}
			break;
			
		case 'plain':
			res.set('Content-Type', 'text/plain');
			res.send(plainText);
			break;
		
		case 'vcard':
			res.set('Content-Type', 'text/vcard');
			res.send(vcardDemo);
			break;
			
		case 'xml':
			res.set('Content-Type', 'text/xml');
			res.send(exampleXML);
			break;
			

		default:
			res.send(404);
			break;
	}
});

// responses for all post requests.
app.post('/:dataType', function(req,res,next){
	res.render('coming-soon');
});

// responses for all put requests.
app.put('/:dataType', function(req,res,next){
	res.render('coming-soon');
});

// responses for all delete requests.
app.delete('/:dataType', function(req,res,next){
	res.render('coming-soon');
});

// responses for all options requests.
app.options('/:dataType', function(req,res,next){
	res.render('coming-soon');
});

// responses for all patch requests.
app.patch('/:dataType', function(req,res,next){
	res.render('coming-soon');
});




/**
 * Application Logic.
**/


var entityMap = {
	"&": "&amp;"
	, "<": "&lt;"
	, ">": "&gt;"
	, '"': "&quot;"
	, "'": "&#39;"
	, "/": "&#x2F;"
	, ";": "&#59;"
	, "\\": "&#92;"
};

function escapeHtml(string) {
	return String(string).replace(/[&<>"'\/;\\]/g, function (s) {
		return entityMap[s];
	});
}


/**
 * Listen.
**/


var port = process.env.PORT || 80;
server.listen(port, function() {
  console.log("Listening on " + port);
});
