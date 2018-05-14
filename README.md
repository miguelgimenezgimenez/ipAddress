#  IpAdressCodeAssessment


Deployed project at http://ipAddress/miguelgimenez.tech
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
Although this project 
To do this project I have use React, Redux,React Router, Babel, Webpack and material-ui. 





# ARCHITECTURE:


To Structure the project I have grouped the components as organisms, organisms and Pages:

### molecules

Simple components that consist of simple html Elements (or material-ui components).


### organisms

Components that are composed of molecules and other simple components


### Pages

This component is the main rendered component for a specific route.