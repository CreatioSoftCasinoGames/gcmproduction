'use strict';

var App = require('../model/app').app;

/**
   GET: /app/appId
 */

exports.getByAppId = function (req,res,next) {
    res.header("Access-Control-Allow-Origin", "*");
    if( !req.params.appId ) return res.json("Invalid Request").status(404);
    App.getAppById(req.params.appId, function(err, result) {
      if (!err) {
          res.json(result);
      } else {
          console.log(err);
          return res.json("Oops something went wrong...").status(500);
      }
    });
};

/**
   GET: /app
 */

exports.getAppList = function (req,res,next) {
    res.header("Access-Control-Allow-Origin", "*");
    App.getAppList(function(err, result) {
      if (!err) {
          res.json(result);
      } else {
          console.log(err);
          return res.json("Oops something went wrong...").status(500);
      }
    });
};


/**
   POST: /app
 */

exports.create = function (req,res,next) {
    res.header("Access-Control-Allow-Origin", "*");
    App.createApp(req.body, function(err, data) {
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

