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

var play = function (req, res) {
  var gameInfo = req.body;

  var nextMove = {
    action: 'fold'
  };
  res.status(200).send(nextMove);
};

/**
 * This is used by pokerwars.io when your bot subscribes
 * to verify that is alive and responding.
 */
var ping = function (req, res) {
  // Send a pong with the value of true here

};

/**
 * These requests are sent optionally, you decide if
 * you want them when you subscribe.
 * 
 * Your poker bot does not need to necessarily provide
 * an API for these, but they can give you useful hints
 * on what is happening during the tournaments.
 * 
 * Please do not use notifications in your poker bot logic,
 * as they are not guaranteed to always be sent. They are only
 * informative so you are aware of what your bot is doing.
 */
var notifications = function (req, res) {
  var notification = req.body;
  console.log(notification.type, notification.message);
  res.status(200).send();
};

// Routes

app.route('/pokerwars.io/play').post(play);

app.route('/pokerwars.io/ping').get(ping);

app.route('/pokerwars.io/notifications').post(notifications);

// Listen

app.listen(port);
