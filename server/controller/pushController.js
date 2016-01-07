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
   GET: /linkClick
 */

exports.registerLinkClick = function (req,res,next) {
    console.log(req.body.pushName);
    if( !req.body.pushName ) return res.json("Invalid Request").status(404);
    Push.updatePush(req.body.pushName, function(err, result) {
      if (!err) {
          res.json("Successfully");
      } else {
          console.log(err);
          return res.json("Oops something went wrong...").status(500);
      }
    });
};
