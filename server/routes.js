'use strict';

// Load modules

var Gcm = require('./controller/gcmController'),
	App = require('./controller/appController'),
	Push = require('./controller/pushController');

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

    app.route('/push/:appId')
    	.get(Push.getPushListByAppId);

    app.route('/linkClick/:pushName')
    	.get(Push.registerLinkClick);

}
