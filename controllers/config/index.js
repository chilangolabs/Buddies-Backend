'use strict';

var mdwIsAuthenticated = require('../../lib/passport').isAuthenticated;

module.exports = function(router) {

  router.post('/phone', mdwIsAuthenticated, function(req, res) {
    var phone = req.body.phone || req.query.phone;
    if (!phone) {return res.status(400);}
    req.user.phoneNumber = phone;
    req.user.save(function(err, user) {
      if (err) {return res.redirect('/error');}
      res.redirect('sms/');
    });
  });

};
