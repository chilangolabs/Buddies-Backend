'use strict';

var mongoose = require('mongoose');

var dbConfig = function() {
  return {
    initialize: function(conf) {
      mongoose.connect(conf.url);
      var db = mongoose.connection;
      db.on('error', console.error.bind(console, 'connection error:'));
      db.once('open', function() {
        console.log('db connection open');
      });
    }
  };
};

module.exports = new dbConfig();
