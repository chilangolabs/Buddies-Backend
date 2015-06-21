'use strict';

var mongoose = require('mongoose');

var userModel = function() {
  var userSchema = new mongoose.Schema({
    'username': String,
    'password': String,
    'email': String,
    'birthDate': Date,
    'displayName': String,
    'fbId': String,
    'fbToken': String,
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
    console.log('findFacebook', profile);

    if (!profile) {
      return cb(new Error('profile object not filled'));
    }

    if (!profile.emails || !profile.emails[0]) {
      profile.emails = [{}]; // Si no tiene email evita una excepción.
    }
    return this.findOne({'fbId': profile.id}, function(err, user) {
      if (err) {
        return cb(err, user);
      }
      if (!user) {
        User.create({
          'displayName': profile.displayName,
          'fbId': profile.id,
          'fbToken': key,
          'email': profile.emails[0].value,
          'genere': ((profile._json.gender) ? profile._json.gender : '')
        }, function(err, user) {
          if (err) {return cb(err, null);}
          cb(err, user);
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
