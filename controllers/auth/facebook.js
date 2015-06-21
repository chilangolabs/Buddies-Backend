'use strict';

var passport = require('passport');

module.exports = function(router) {

  router.get('/',
    passport.authenticate('facebook',
      {scope: ['public_profile', 'email', 'user_friends']}));
  router.get('/callback',
    passport.authenticate('facebook', {
      successRedirect: '/',
      failureRedirect: '/error'
    }
  ));
  router.get('/api',
    passport.authenticate('facebook-token', {
      successRedirect: '/',
      failureRedirect: '/error'
    }));

};
