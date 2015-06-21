'use strict';

var mongoose = require('mongoose');

var JobsModel = function() {
  var jobSchema = new mongoose.Schema({
    'createdAt': Date,
    'poke': Boolean,
    'message': String,
    'job': {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Job'
    },
    'creator': {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    'destiny': {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  });

  var Job = mongoose.model('Job', jobSchema);
  return Job;
};

module.exports = new JobsModel();
