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

# Express-MySql

create a database manully as "mydb" before u run the code
change the hostname,password according to ur mysql configuration
in sequelizer.js

#steps to run
#1.npm install / yarn install
it will install the express and sequelize
#2.node server.js ->
server running once server start running
#3.in chrome http://localhost:7000/

-----------------------------------------------------


get:-
Request Type:- Get

Request url:- http://localhost:7000/customers/3
http://localhost:7000/

//using post man
----------------------------------------------------

post:-
Request Type:- Post

Request url:- http://localhost:7000/customers

Request body param:-
{
"name":"banu",
"address":"mysur"
}

-----------------------------------------------------------

put:-
Request Type:- Put

Request url:- http://localhost:7000/customers/1

change the name to priya whose id is 1

Request body param:-
{
"name":"priya",
}

------------------------------------------------------------

delete:-
Request Type:- Delete

Request url:- http://localhost:7000/customers/1

delte the filed whose id is 1

#software needed

mysql
phpmyadmin
postman
