# learn-express

website:expressjs.com

npm install express 
npm install joi@13.1.0
npm install nodemon

var express = require('express');
var app = express();

#METHODS

express.json([options])

-->This is a built-in middleware function in Express. It parses incoming requests with JSON payloads and is based on body-parser.

Returns middleware that only parses JSON and only looks at requests where the Content-Type header matches the type option. This parser accepts any Unicode encoding of the body and supports automatic inflation of gzip and deflate encodings.

A new body object containing the parsed data is populated on the request object after the middleware (i.e. req.body), or an empty object ({}) if there was no body to parse, the Content-Type was not matched, or an error occurred.


#APPLICATION
The app object conventionally denotes the Express application. Create it by calling the top-level express() function exported by the Express module:

var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('hello world');
});

app.listen(3000);
