'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


/**
  * @module  app User
  * @description contain the details of post
*/

var appUserSchema = new Schema({

  appId: { type: String, required: true },
  
  userDeviceId : { type: String, required: true },

  appVersion : { type: String, required: true },

  appEnvironment : { type: String }
  
});



appUserSchema.statics.getUser= function(querry, callback) {
    this.find(querry, callback);
};

appUserSchema.statics.createUser = function(requestData, callback) {
    this.create(requestData, callback);
};


var appUser = mongoose.model('appUser', appUserSchema);

/** export schema */
module.exports = {
    appUser : appUser
};