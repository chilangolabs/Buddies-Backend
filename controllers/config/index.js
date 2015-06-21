'use strict';

var mdwIsAuthenticated = require('../../lib/passport').isAuthenticated;
var twilio = require('../../lib/twilio');

module.exports = function(router) {

  router.post('/phone', mdwIsAuthenticated, function(req, res, next) {
    var phone = req.body.phone || req.query.phone;
    if (!phone) {return res.status(400);}
    req.user.phoneNumber = phone;
    req.user.smsVerified = false;
    req.user.save(function(err, user) {
      if (err) {return res.redirect('/error');}
      next();
    });
  }, twilio.sendCode);

};
