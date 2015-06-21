'use strict';

var mdwIsAuthenticated = require('../../lib/passport').isAuthenticated;
var User = require('../../models/User');

module.exports = function(router) {

  router.post('/addTalents', mdwIsAuthenticated, function(req, res, next) {
    var talents = req.body.talents || req.query.talents;
    if (!talents) {return res.sendStatus(400);}
    req.user.update({'$push': {'talents': {'$each': talents}}}, function(err, user) {
      if (err) {return res.sendStatus(500);}
      res.sendStatus(200);
    });
  });

  router.get('/getTalents', mdwIsAuthenticated, function(req, res, next) {
    res.status(200).json({talents:req.user.talents});
  });

};
