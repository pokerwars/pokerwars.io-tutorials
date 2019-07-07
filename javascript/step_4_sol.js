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
 * This endpoint is called by pokerwars.io to request
 * your bot next move on a tournament.
 * You have the current state of the table in the
 * GameInfo object, which you can use to decide
 * your next move.
 */
var play = function (req, res) {
  // This is the game info and it contains all the
  // information about the state of the game.
  // You will have to use it to decide what your
  // bot should do next.
  var gameInfo = req.body;

  // Create a nextMove object and send it back with here
  var nextMove = {
    action: 'fold'
  };
  res.status(200).send(nextMove);
};

// Routes

app.route('/pokerwars.io/play').post(play);

app.route('/pokerwars.io/ping').get(ping);

app.route('/pokerwars.io/notifications').post(notifications);

// Listen

app.listen(port);
