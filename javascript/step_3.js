// Require and initialise Express
var express = require('express'),
  app = express(),
  port = process.env.PORT || 8090,
  bodyParser = require('body-parser');

// Middleware
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

// Functions

var play = function (req, res) {};

// Add here functions for ping and notifications

// Routes

app.route('/pokerwars.io/play').post(play);

// Add here routes for ping and notifications

// Listen

app.listen(port);
