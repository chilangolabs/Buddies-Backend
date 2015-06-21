'use strict';

var mongoose = require('mongoose');

var messageModel = function() {
  var messageSchema = new mongoose.Schema({
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

  var Message = mongoose.model('Message', messageSchema);
  return Message;
};

module.exports = new messageModel();
