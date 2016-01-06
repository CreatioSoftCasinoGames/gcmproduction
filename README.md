GCM DASHBOARD
=============================================================

Now it's time to start coding...

Happy Coding!


### Install an app

Run the following command in root directory of an app in command prompt.

###### *Install node packages*

server/ npm install

###### *Install bower components*

client/src/ bower install

### Run an app

###### *Run Server*

Run the following command in root directory of an app in command prompt.

server/ node server.js

You can see the port number in command prompt after sucessfull run

You can change the settings in server/config/config.js file

### API

###### *GET request/ Get all users of a perticular app*

    http://host:port/appUser/:appId

###### *POST / Create App User*

    http://host:port/appUser
    
    Body:

     	{
            "appId": "app1",        // required
            "userDeviceId": "usd1", // required
            "appVersion": "v1",     // required
            "appEnvironment": "android"
        }
	

	Response:

    	{
            "appId": "app1",
            "userDeviceId": "usd1",
            "appVersion": "v1",
            "appEnvironment": "android",
            "_id": "568ba8247ffbefcd1412ed60"
        }

###### *POST / Send Push to all user*

    http://host:port/sendPush
    
    Body:

        {
           "pushName": "push1",
            "title": "Notification Title",
            "subtitle": "Notification Subtitle",
            "link": "http://creatiosoft.com/",
            "appId": "app111"
        }
    

    Response:

        Push Successfully sent

###### *POST / Register new app*

     http://host:port/app
    
    Body:

        {
            "appId": "some appId",
            "appName": "poker",
            "appVersion": "v1",
            "appEnvironment": "android"
        }
    

    Response:

        {
            "appId": "some appId",
            "appName": "poker",
            "appVersion": "v1",
            "appEnvironment": "android",
            "_id": "568cb9caf6b4163b1268ad07"
        }

###### *GET request/ Get a list of app registered*

    http://host:port/app

###### *GET request/ Get a specification or data of a perticular app registered*

    http://host:port/app/:appId

###### *GET request/ Get a list of push of a perticular registered app*

    http://host:port/push/:appId

