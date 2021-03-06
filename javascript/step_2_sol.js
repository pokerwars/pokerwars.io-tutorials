// Require and initialise Express
var express = require('express'),
  app = express(),
  // if no PORT environment variable is present, 8090 will be used
  port = process.env.PORT || 8090,
  bodyParser = require('body-parser');

// Middleware
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

// Listen
app.listen(port);
