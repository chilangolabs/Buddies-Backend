'use strict';

var mdwIsAuthenticated = require('../../lib/passport').isAuthenticated;
var twilio = require('../../lib/twilio');

module.exports = function(router) {

  router.get('/', mdwIsAuthenticated, twilio.sendCode);
  router.get('/validate', mdwIsAuthenticated, function(req, res, next) {
    var code = req.body.code || req.query.code;
    if (!code) {
      return res.status(400);
    }
    if (code === req.user.smsCode) {
      req.user.smsVerified = true;
      req.user.save(function(err, user) {
        if (err) {return res.status(400).json({error: 'db error'});}
        res.status(200);
      });
    }
  });

};
