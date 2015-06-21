'use strict';

var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var FacebookTokenStrategy = require('passport-facebook-token').Strategy;
var User = require('../models/User');

var passportConfig = function() {
  return {
    initialize: function(APP_ID, APP_SECRET, URL_FB_CALLBACK, app) {

      passport.use('facebook', new FacebookStrategy({
          clientID: APP_ID,
          clientSecret: APP_SECRET,
          callbackURL: URL_FB_CALLBACK,
          enableProof: true
        },
        function(accessToken, refreshToken, profile, done) {
          User.findFacebook(profile, accessToken, function(err, user) {
            if (err) { return done(err); }
            done(null, user);
          });
        }
      ));
      passport.use('facebook-token', new FacebookTokenStrategy({
          clientID: APP_ID,
          clientSecret: APP_SECRET,
          enableProof: true
        },
        function(accessToken, refreshToken, profile, done) {
          User.findFacebook(profile, accessToken, function(err, user) {
            if (err) { return done(err); }
            done(null, user);
          });
        }
      ));
      passport.serializeUser(this.serialize);
      passport.deserializeUser(this.deserialize);
      app.use(passport.initialize());
      app.use(passport.session());
    },
    serialize: function(user, done) {
      console.log('serialize', user.id);
      done(null, user.id);
    },
    deserialize: function(id, done) {
      console.log('deserialize', id);
      User.findOne({_id: id}, function(err, doc) {
        if (err) {done(err, doc);}
        done(err, doc);
      });
    }
  };
};

module.exports = new passportConfig();
