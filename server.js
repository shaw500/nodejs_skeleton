var express = require('express');
var common = require('./common.js');

var app = express();
var config = common.config();

require('./before_routing')(app);

require('./routes')(app);

require('./after_routing')(app);

var server = app.listen(3000, function() {
  console.log('Running in env: ' + process.env.NODE_ENV);
  console.log('Listening on port %d', server.address().port);
});
