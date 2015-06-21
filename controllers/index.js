'use strict';

var IndexModel = require('../models/index');

module.exports = function(router) {

  var model = new IndexModel();

  router.get('/', function(req, res) {
    res.format({
      json: function() {
        if (req.isAuthenticated()) {
          res.json(req.user.toObject());
        } else {
          res.json({});
        }
      },
      html: function() {
        res.locals.isAuthenticated = req.isAuthenticated();
        res.locals.user = req.user;
        res.render('index');
      }
    });
  });

};
