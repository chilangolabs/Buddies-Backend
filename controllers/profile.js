'use strict';

var mdwIsAuthenticated = require('../lib/passport').isAuthenticated;
var User = require('../models/User');

module.exports = function(router) {

  router.get('/', function(req, res, next) {
    var id = req.body.id || req.query.id;
    if (!id) {return res.sendStatus(400);}
    User.findById(id, function(err, user) {
      if (err) {return res.sendStatus(500);}
      res.status(200).json(user);
    });
  });

  router.post('/', function(req, res, next) {
    var body = req.body || req.query;
    User.create({
      'displayName': body.displayName,
      'fbPicture': body.fbPicture,
      'talents': [body.talent]
    }, function(err, user) {
      console.error(err);
      if (err) {return res.sendStatus(400);}
      res.status(200).json(user);
    });
  });

};
