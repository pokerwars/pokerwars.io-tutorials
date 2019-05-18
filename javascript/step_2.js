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

/**
 * This endpoint is called by pokerwars.io to request your bot next move on a tournament.
 * You have the current state of the table in the GameInfo object, which you can use to decide
 * your next move.
 */
var play = function (req, res) {
    // This is the game info and it contains all the information about the state of the game.
    // You will have to use it to decide what your bot should do next.
    var gameInfo = req.body;

    // Create a nextMove object and send it back with here
    var nextMove = ????;
    res.status(200).send(nextMove);
  };
  
  /**
   * This is used by pokerwars.io when your bot subscribes to verify that is alive and responding.
   */
  var ping = function (req, res) {
    // Send a pong with the value of true here

  };
  
  /**
   * These requests are sent optionally, you decide if you want them when you subscribe. Your
   * poker bot does not need to necessarily provide an API for these, but they can give you
   * useful hints on what is happening during the tournaments. Please do not use notifications
   * in your poker bot logic, as they are not guaranteed to always be sent. They are only
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
