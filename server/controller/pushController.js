'use strict';

var Push = require('../model/push').push;

/**
   GET: /push/appId
 */

exports.getPushListByAppId = function (req,res,next) {
    res.header("Access-Control-Allow-Origin", "*");
    if( !req.params.appId ) return res.json("Invalid Request").status(404);
    Push.getPushListByAppId(req.params.appId, function(err, result) {
      if (!err) {
          res.json(result);
      } else {
          console.log(err);
          return res.json("Oops something went wrong...").status(500);
      }
    });
};

/**
   POST: /push
 */

exports.create = function (req,res,next) {
    res.header("Access-Control-Allow-Origin", "*");
    Push.createPush(req.body, function(err, data) {
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

