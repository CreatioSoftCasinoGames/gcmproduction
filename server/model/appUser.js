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

  uuid : { type: String, required: true, unique: true },

  appVersion : { type: String, required: true },

  osVersion: { type: String },

  location: { type: String },

  appEnvironment : { type: String }
  
});



appUserSchema.statics.getUser= function(querry, callback) {
    this.find(querry, callback);
};

appUserSchema.statics.getUserDeviceIdByAppId= function(querry, callback) {
    this.find(querry, { userDeviceId: 1, _id: 0 }, callback);
};

appUserSchema.statics.createUser = function(requestData, callback) {
    this.update({uuid: requestData.uuid}, requestData, {upsert: true}, callback);
};

appUserSchema.statics.updateUserDeviceId = function(userDeviceId, callback){
    this.update(
       { name: pushName},
       { $inc: { linkClicked: 1 } },
       callback);
};


var appUser = mongoose.model('appUser', appUserSchema);

/** export schema */
module.exports = {
    appUser : appUser
};