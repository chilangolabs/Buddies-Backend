'use strict';

var mongoose = require('mongoose');

var JobsModel = function() {
  var jobSchema = new mongoose.Schema({
    'title': String,
    'description': String,
    'createdAt': Date,
    'categories': [String],
    'creator': {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    'status': String
  });

  var Job = mongoose.model('Job', jobSchema);
  return Job;
};

module.exports = new JobsModel();
