'use strict';
// // - a route that will display the local time

// // - a route that takes a first name as part of the URL and greets that name.

// // For instance, if the URL specifies a name of 'Zaphod' it should send a JSON object that looks like this:

// // {"msg" : "Hello Zaphod!”}

// BASE SETUP
// ==============================================
var moment  = require('moment');
var express = require('express');
var app     = express();
var port    = process.env.PORT || 3000;

// ROUTES
// ==============================================
// get an instance of router
var router = express.Router();

// route middleware that will happen on every request
router.use(function(req, res, next) {

  // log each request to the console
  console.log(req.method, req.url);

  // continue doing what we were doing and go to the route
  next();
});

router.get('/', function(req, res, next) {
  var time = '<br><a href="/api/time"><br>Time</a><a href="/api"><br>api page</a>';
  var name = '<a href="/api/hello/Travis"><br>hello/Travis</a>';
  res.status(200);
  res.send('you\'ve visited the api home page, use ' + time + name);
  next();
});

// route with parameters (http://localhost:3000/hello/:name)
router.get('/hello/:name', function(req, res, next) {
  res.status(200);
  res.json({
    msg: 'hello ' + req.params.name + '!'
  });
  next();
});

router.get('/time', function(req, res, next) {
  res.status(200);
  res.json({
    time: moment().format('YYYY-MM-DD HH:mm')
  });
  next();
});

// apply the routes to our application
app.use('/api', router);

// START THE SERVER
// ==============================================
app.listen(port);
console.log('server started on ' + port);
