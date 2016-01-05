'use strict';

var AppUser = require('../model/appUser').appUser;



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

