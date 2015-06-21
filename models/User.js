'use strict';

var mongoose = require('mongoose');
var FB = require('fbgraph');

var userModel = function() {
  var userSchema = new mongoose.Schema({
    'username': String,
    'password': String,
    'email': String,
    'birthDate': Date,
    'displayName': String,
    'fbId': String,
    'fbToken': String,
    'fbPicture': String,
    'smsVerified': Boolean,
    'smsCode': String,
    'emailVerified': Boolean,
    'gpsVerified': Boolean,
    'genere': String,
    'talents': [String],
    'phoneNumber': String,
    'history': [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Job'
    }]
  });

  userSchema.statics.findFacebook = function(profile, key, cb) {
    var self = this;
    console.log('findFacebook', profile);

    if (!profile) {
      return cb(new Error('profile object not filled'));
    }

    if (!profile.emails || !profile.emails[0]) {
      profile.emails = [{}]; // Si no tiene email evita una excepción.
    }
    self.findOne({'fbId': profile.id}, function(err, user) {
      if (err) {
        return cb(err, user);
      }
      if (!user) {
        FB.get('me/picture?access_token=' + key, function(err, res) {
          if (err) {
            return console.error(err, 'findFacebook me/picture');
          }
          if (res && res.data && res.data[0]) {
            profile.fbPicture = res.data[0].url;
          }
          User.create({
            'displayName': profile.displayName,
            'fbId': profile.id,
            'fbToken': key,
            'fbPicture': profile.fbPicture,
            'email': profile.emails[0].value,
            'genere': ((profile._json.gender) ? profile._json.gender : '')
          }, function(err, user) {
            if (err) {return cb(err, null);}
            cb(err, user);
          });
        });
      } else {
        user.fbToken = key;
        user.save(function(err) {
          if (err) {return cb(err, null);}
          cb(err, user);
        });
      }
    });
  };

  var User = mongoose.model('User', userSchema);
  return User;
};

module.exports = new userModel();
