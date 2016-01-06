'use strict';

// Load modules

var Gcm = require('./controller/gcmController'),
	App = require('./controller/appController');

// API Server Endpoints
module.exports = function(app){

	app.route('/appUser')
		.post(Gcm.create);

    app.route('/appUser/:appId')
    	.get(Gcm.getByAppId);

    app.route('/sendPush')
		.post(Gcm.sendPush);

	app.route('/app')
		.post(App.create)
		.get(App.getAppList);

    app.route('/app/:appId')
    	.get(App.getByAppId);

}
