'use strict';

var IndexModel = require('../models/index');

module.exports = function(router) {

  var model = new IndexModel();

  router.get('/', function(req, res) {
    res.format({
      json: function() {
        res.json(JSON.stringify(req.user));
      },
      default: function() {
        res.locals.user = req.user;
        res.render('index');
      }
    });
  });

};
