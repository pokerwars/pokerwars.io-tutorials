// Require and initialise Express
var express = require('express'),
  app = express(),
  port = process.env.PORT || 8090, // if no PORT environment variable is present, 8090 will be used
  bodyParser = require('body-parser');

// Middleware
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

// Listen
app.listen(port);
