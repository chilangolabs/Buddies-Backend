'use strict';

var mdwIsAuthenticated = require('../../lib/passport').isAuthenticated;
var twilio = require('../../lib/twilio');

module.exports = function(router) {

  router.get('/resend', mdwIsAuthenticated, twilio.sendCode);
  router.post('/validate', mdwIsAuthenticated, function(req, res, next) {
    var code = req.body.code || req.query.code;
    if (!code) {
      return res.sendStatus(400);
    }
    if (code === req.user.smsCode) {
      req.user.smsVerified = true;
      req.user.save(function(err, user) {
        if (err) {return res.status(400).json({error: 'db error'});}
        res.sendStatus(200);
      });
    } else { res.sendStatus(400); }
  });

};
