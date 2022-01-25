// Require Express
const express = require('express');
 
// Express server handling requests and responses
const app = express();

// Make everything inside of public/ available
app.use(express.static('public'));

// Home route:
app.get('/home', (request, response, next) => response.sendFile(__dirname + '/views/home.html'));
 
// About route:
app.get('/about', (request, response, next) => response.sendFile(__dirname + '/views/about.html'));

// Works route:
app.get('/works', (request, response, next) => response.sendFile(__dirname + '/views/works.html'));

// About route:
app.get('/photoGallery', (request, response, next) => response.sendFile(__dirname + '/views/photoGallery.html'));

// Server Started
app.listen(3000, () => console.log('My first app listening on port 3000! '));