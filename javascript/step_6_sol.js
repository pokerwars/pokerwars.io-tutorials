var express = require('express'),
  app = express(),
  port = process.env.PORT || 8090,
  request = require('request'),
  bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

var play = function (req, res) {
  var gameInfo = req.body;
  var nextMove = {
    action: 'fold'
  };
  res.status(200).send(nextMove);
};

var ping = function (req, res) {
  res.status(200).send({
    pong: true
  });
};

var notifications = function (req, res) {
  var notification = req.body;
  console.log(notification.type, notification.message);
  res.status(200).send();
};

app.route('/pokerwars.io/play').post(play);

app.route('/pokerwars.io/ping').get(ping);

app.route('/pokerwars.io/notifications').post(notifications);

app.listen(port);

// Subscribe

// Create a POST request to the Engine /subscribe endpoint
request.post('https://play.pokerwars.io/v1/pokerwars/subscribe', {
    json: {
      // Add your username and apiToken here
      username: 'tutorial',
      apiToken: '1234567890',
      botEndpoint: 'http://1.2.3.4:8080',
      notifications: false
    }
  },
  function (error, response, body) {
    // Check the status code here
    if (!error && response.statusCode == 202) {
      console.log('Subscribed to pokerwars.io successfully! Response: ', body);
    } else {
      console.log('Your bot did NOT subscribe succesfully! Reason: ', body);
      process.exit(-1);
    }
  }
);