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

###### *GET request/ get all users of a perticular app*

    http://localhost:8000/appUser/:appId

###### *POST appUser/ Create App User*

    http://localhost:8000/appUser
    
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




		
