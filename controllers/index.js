'use strict';

var mdwIsAuthenticated = require('../lib/passport').isAuthenticated;

module.exports = function(router) {

  router.get('/', mdwIsAuthenticated, function(req, res) {
    res.format({
      json: function() {
        res.json(req.user.toObject());
      },
      html: function() {
        res.locals.isAuthenticated = req.isAuthenticated();
        res.locals.user = req.user;
        res.render('index');
      }
    });
  });

};
