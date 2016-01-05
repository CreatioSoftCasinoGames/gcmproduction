'use strict';

// Load modules

var Gcm = require('./controller/gcmController');

// API Server Endpoints
module.exports = function(app){

	app.route('/appUser')
		.post(Gcm.create);

    app.route('/appUser/:appId')
    	.get(Gcm.getByAppId);

}
