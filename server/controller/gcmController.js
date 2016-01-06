'use strict';

var AppUser = require('../model/appUser').appUser,
    gcm = require('node-gcm');



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
            res.json(data);
        } else {
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
            link: req.body.link
          }          
    }

    // Set up the sender with you API key 

    var GoogleServerAPIKey = 'AIzaSyCPnh643pd2rg4Oig7rRhjKK8J7j4SgWTc'; // Google Server API Key

    // Add the registration tokens of the devices you want to send to    
    //Ex: var registrationTokens = ['APA91bHfadVJSU_uIhHMFBnkYFUGK65JNED0xfmiZ7-h3tufNl1rJNFN3neluWIy9GlesEFbVDyd5IP351pKg64wP0Ik9wU35tbeNV7JdZKf5BsCk3YY19-oavpAv5E1mzc6KbqOykC2'];

    var registrationTokens = ['APA91bF5wuz7eqcBVhzILeDhYie5aWni9fIZB4BEDzrDeTQZuz-1AoECZKiwMTBgiBsKrACLm8kZVMasOhNmJi1_iVBEY4xYWZDTJ-L-8QHB807keoNPIZjrpzpvWNu6Arz2WHfY9Q9b'];

    sendPush(messageData, GoogleServerAPIKey, registrationTokens, function (err, response) {
      if(err) {
        console.log("Error...");
        console.log(err);
        return res.json(err).status(403);        
      }
      else {
        console.log("Success...");
        console.log(response)
        return res.json("Push Successfully sent");
      }
    });
};

// This function is responsible to send push notification.
function sendPush(messageData, GoogleServerAPIKey, registrationTokens, callback){

  // Create a message with given value
    var message = new gcm.Message(messageData);

    // Set up the sender with you API key 
    var sender = new gcm.Sender(GoogleServerAPIKey);

    sender.send(message, { registrationTokens: registrationTokens }, callback);
}


