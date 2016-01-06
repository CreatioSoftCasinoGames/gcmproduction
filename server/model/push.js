'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


/**
  * @module  app
  * @description contain the details of post
*/

var pushSchema = new Schema({

  pushName: { type: String, required: true },

  appId: { type: String, required: true },

  title : { type: String, required: true },

  subtitle : { type: String, required: true },

  link : { type: String },

  totalPush: { type: Number },

  linkClicked: { type: Number }
  
});



pushSchema.statics.getPushListByAppId= function(appId, callback) {
    this.find({ appId: appId }, callback);
};

pushSchema.statics.createPush = function(requestData, callback) {
    this.create(requestData, callback);
};


var push = mongoose.model('push', pushSchema);

/** export schema */
module.exports = {
    push : push
};