#  IpAdressCodeAssessment


Deployed project at http://ipaddress.miguelgimenez.tech/

### Running the project

**Install dependencies:**


    $ yarn 
    or 
    $ npm install


**Run in development mode:**

    $ nvm use
    $ npm run dev   
 
Then go to ``http://localhost:8000/``


**Run in production mode :** 

    $ nvm use
    $ npm run build
    $ npm start
	
	

Then go to ``http://localhost:8000/``

    


# DESCRIPTION
In spite of the simplicity of the project I have done a bit of overkill by using libraries that where not needed like React , Redux , Material-UI, 
and also using ipInfo api to get the location of the ipAdress I could have just got the ipAddress like so with the socket connection :

 ``const ipAddress = socket.request.connection.remoteAddress``
 
 But decided to add a bit of complexity to the project, by getting the ipInfo from ipInfo api,  the reason this function doesnt dispatch an action is because it doesnt interact with the store directly, so I thought it didnt have to interact with redux.

Also its only showing unique ipAddresses



# ARCHITECTURE:
I like to use atomic architecture , but due to the simplicity of the project i only used molecules to differentiate components (its a bit non-sense but just to show...)

