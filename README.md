# learn-express
# Installing
Assuming you’ve already installed Node.js, create a directory to hold your application, and make that your working directory.

$ mkdir myapp
$ cd myapp
Use the npm init command to create a package.json file for your application. For more information on how package.json works, see Specifics of npm’s package.json handling.

$ npm init
This command prompts you for a number of things, such as the name and version of your application. For now, you can simply hit RETURN to accept the defaults for most of them, with the following exception:

entry point: (index.js)
Enter app.js, or whatever you want the name of the main file to be. If you want it to be index.js, hit RETURN to accept the suggested default file name.

Now install Express in the myapp directory and save it in the dependencies list. For example:

$ npm install express --save
To install Express temporarily and not add it to the dependencies list:

$ npm install express --no-save

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
#3.in chrome http://localhost:8000/

-----------------------------------------------------


get:-
Request Type:- Get

Request url:- http://localhost:8000/customers/3
http://localhost:8000/

//using post man
----------------------------------------------------

post:-
Request Type:- Post

Request url:- http://localhost8000/customers

Request body param:-
{
"name":"banu",
"address":"mysur"
}

-----------------------------------------------------------

put:-
Request Type:- Put

Request url:- http://localhost:8000/customers/1

change the name to priya whose id is 1

Request body param:-
{
"name":"priya",
}

------------------------------------------------------------

delete:-
Request Type:- Delete

Request url:- http://localhost:8000/customers/1

delte the filed whose id is 1

#software needed

mysql
phpmyadmin
postman
