var config = require('./common.js').config();

var before_routing = function(app) {

  app.use(function(req, res, next) {
    if (config["logging_enabled"]) console.log(req.method, req.url);
    next();
  });
}

module.exports = before_routing;
