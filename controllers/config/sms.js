'use strict';

var mdwIsAuthenticated = require('../../lib/passport').isAuthenticated;
var twilio = require('../../lib/twilio');

module.exports = function(router) {

  router.get('/', mdwIsAuthenticated, function(req, res) {
    twilio.sendCode(req.user.phoneNumber);
  });

};
