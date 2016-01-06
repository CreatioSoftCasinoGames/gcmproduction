'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


/**
  * @module  app
  * @description contain the details of post
*/

var appSchema = new Schema({

  appId: { type: String, required: true },

  apiKey: { type: String, required: true },

  appName : { type: String, required: true },

  appVersion : { type: String, required: true },

  appEnvironment : { type: String }
  
});



appSchema.statics.getAppList= function(callback) {
    this.find({}, { appId: true, appName: true, appVersion: true, apiKey: true },callback);
};

appSchema.statics.getAppById= function(appId, callback) {
    this.findOne({ appId: appId } ,callback);
};

appSchema.statics.createApp = function(requestData, callback) {
    this.create(requestData, callback);
};


var app = mongoose.model('app', appSchema);

/** export schema */
module.exports = {
    app : app
};