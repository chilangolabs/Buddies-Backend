'use strict';

var express = require('express');
var kraken = require('kraken-js');

var options;
var app;

/*
 * Create and configure application. Also exports application instance for use by tests.
 * See https://github.com/krakenjs/kraken-js#options for additional configuration options.
 */
options = {
  onconfig: function(config, next) {
    var twilio = require('./lib/twilio');
    twilio.initialize(config.get('twilio:sid'), config.get('twilio:token'));
    var mongoose = require('./lib/mongoose');
    mongoose.initialize({url: config.get('mongoose:url')});
    var passport = require('./lib/passport');
    passport.initialize(config.get('facebook:id'),
      config.get('facebook:secret'), config.get('facebook:url'));
    /*
     * Add any additional config setup or overrides here. `config` is an initialized
     * `confit` (https://github.com/krakenjs/confit/) configuration object.
     */
    next(null, config);
  }
};

app = module.exports = express();
app.use(kraken(options));
app.on('start', function() {
  console.log('Application ready to serve requests.');
  console.log('Environment: %s', app.kraken.get('env:env'));
});
