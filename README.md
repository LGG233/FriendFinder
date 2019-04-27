# FriendFinder: Answer some questions, find a new friend!

FriendFinder brings people together. Visit the page, answer ten questions, et voilà -- your recommended new friend pops up. 

The match is based on your personality as revealed by your answers to the ten questions. Everyone who visits the page is required to complete the survey, thus sharing their personality with all the users to come. 

# How it works
The app compares results provided by each new user to results provided by previous visitors to the app, and is built on the idea that the closer an individual user's responses are to those of someone who's already responded to the survey, the more compatible the two people will be.  

# Observations
Developing FriendFinder was challenging: 
- We haven't worked on the front end in quite a while, so I had to relearn some of the code 
- The API gets and posts didn't always work as expected, so required patient trouble-shooting
- Passing data from file to file and function to function isn't always obvious  

# Front end elements
home.html
survey.html

# Node modules
express
path
nodemon

# Backend modules:
server.js - sets up and starts server
apiRoutes.js - specifies routes for API services
htmlRoutes.js - specifies routes for HTML services
friends.js - data file that holds survey results of all users

# New tools, technologies, and functionalities used include:
- Express and path
- Set up API routes and HTML routes
- Code html and CSS
- Create a valid nested loop
- Chosen jQuery plugin
- Set up local server using port 3000 
- Deploy the completed app to Heroku
- Access multiple files within the app, i.e., create a resuable file structure to hold single-use parts of the code