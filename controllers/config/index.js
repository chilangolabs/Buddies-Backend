'use strict';

var mdwIsAuthenticated = require('../../lib/passport').isAuthenticated;

module.exports = function(router) {

  router.post('/phone', mdwIsAuthenticated, function(req, res) {
    var phone = req.body.phone || req.query.phone;
    if(!phone) return res.status(400);
    req.user.update({$set: {phoneNumber: phone}}, function(err, user){
        if(err) return res.redirect('/error');
        res.status(200);
    });
  });

};
