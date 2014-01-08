
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');

// include packages for parsing JSON to XML and building CL XML
var builder = require('xmlbuilder');
var parse = require('js2xmlparser');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// serves main craigslist form
app.get('/', function( req, res ) {
	res.render('index', { title: 'Uber Craigslist Machine' });
});

// parse craigslist form to xml and send bulk post to craigslist
app.post('/post', function( req, res ) {
	console.log( req.body );
	res.send();

	/**
	 * Need craigslist bulk posting credentials to begin prototyping / testing with cURL
	 *
	 * Once credentials are acquired, next steps are as follows:
	 *
	 * 1. Transform submitted JSON to craigslist XML
	 *    XML requirements are here: http://www.craigslist.org/about/bulk_posting_interface
	 *
	 * 2. Submit XML to craigslist for validation
	 *
	 * 3. Once validated, submit XML to craigslist to post
	 *
	 * 4. Return response to modal and send email summary
	 *
	 */

});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
