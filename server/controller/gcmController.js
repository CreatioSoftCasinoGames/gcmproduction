'use strict';

var AppUser = require('../model/appUser').appUser,
    Push = require('../model/push').push,
    gcm = require('node-gcm'),
    async = require('async');



/**
   GET: /appUser
 */

exports.getByAppId = function (req,res,next) {
    res.header("Access-Control-Allow-Origin", "*");
    if( !req.params.appId ) return res.json("Invalid Request").status(404);
    var querry = { appId: req.params.appId }
    AppUser.getUser(querry, function(err, result) {
      if (!err) {
          res.json(result);
      } else {
          console.log(err);
          return res.json("Oops something went wrong...").status(500);
      }
    });
};


/**
   POST: /appUser
 */

exports.create = function (req,res,next) {
    res.header("Access-Control-Allow-Origin", "*");
    AppUser.createUser(req.body, function(err, data) {
        if (!err) {
            console.log(data);
            res.json(data);
        } else {
            console.log(err);
             if (11000 === err.code || 11001 === err.code) {
                    return res.json("duplicate, it already exist").status(403);
            }
            
            else return res.json(err).status(403); // HTTP 403
        }
    });
};

/**
   POST: /sendPush
 */

exports.sendPush = function (req,res,next) {
    res.header("Access-Control-Allow-Origin", "*");
    var messageData = {
          priority: 'high',
          contentAvailable: true,
          delayWhileIdle: true,
          data: {
            title: req.body.title,
            subtitle: req.body.subtitle,
            link: req.body.link,
            pushName: req.body.name
          }          
    }

    // Set up the sender with you API key 

    //var GoogleServerAPIKey = 'AIzaSyCPnh643pd2rg4Oig7rRhjKK8J7j4SgWTc'; // Google Server API Key

    if( !req.body.appId || !req.body.apiKey ) return res.json("Invalid Request").status(404);

    var GoogleServerAPIKey = req.body.apiKey;

    var querry = { appId: req.body.appId };

    async.waterfall([
        function(callback) {
            AppUser.getUserDeviceIdByAppId(querry, function(err, result) {
              if (!err) {
                  callback(null, result);
              } else {
                  callback("unable to get user list");
              }
            });
        },
        function(results, callback) {
            var registrationTokens = [];
            for(var i=0; i<results.length; i++){
              registrationTokens.push(results[i].userDeviceId);
            }
            req.body.totalPush = registrationTokens.length;
            req.body.linkClicked = 0;
            callback(null, registrationTokens);
        },
        function(registrationTokens, callback) {
          sendPush(messageData, GoogleServerAPIKey, registrationTokens, function (err, response) {
              if(err) {
                callback("Unable to send push notification: "+err);       
              }
              else {
                callback(null, response)
              }
            });
           
        }
    ], function (err, result) {
        if(err){
            return res.json(err).status(403);
        }
        else{
            if(result.success){
                Push.createPush(req.body, function(err, data) {
                    if (!err) {
                        res.json("Push Successfully Send");
                    } else {
                         if (11000 === err.code || 11001 === err.code) {
                                return res.json("duplicate, it already exist").status(403);
                        }
                        else return res.json(err).status(403); // HTTP 403
                    }
                });
            }
            else{
                return res.json("unable to send push notification: as no device registered"); 
            }            
        }
    });    

    // Add the registration tokens of the devices you want to send to    
    //Ex: var registrationTokens = ['APA91bHfadVJSU_uIhHMFBnkYFUGK65JNED0xfmiZ7-h3tufNl1rJNFN3neluWIy9GlesEFbVDyd5IP351pKg64wP0Ik9wU35tbeNV7JdZKf5BsCk3YY19-oavpAv5E1mzc6KbqOykC2'];

    // var registrationTokens = ['APA91bF5wuz7eqcBVhzILeDhYie5aWni9fIZB4BEDzrDeTQZuz-1AoECZKiwMTBgiBsKrACLm8kZVMasOhNmJi1_iVBEY4xYWZDTJ-L-8QHB807keoNPIZjrpzpvWNu6Arz2WHfY9Q9b'];
};

// This function is responsible to send push notification.
function sendPush(messageData, GoogleServerAPIKey, registrationTokens, callback){

  // Create a message with given value
    var message = new gcm.Message(messageData);

    // Set up the sender with you API key 
    var sender = new gcm.Sender(GoogleServerAPIKey);

    sender.send(message, { registrationTokens: registrationTokens }, callback);
}


