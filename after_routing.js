var after_routing = function(app) {

  app.use(function(err, req, res, next) {
    if (!err) return next();
    error = {
      error: err
    }
    res.status(404);
    res.json(error);
  });
}

module.exports = after_routing;
