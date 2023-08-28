const express = require('express');

//Create an Express App
const app = express();

//Require application Route modules
const postsRoute = require('./routes/syndic');
const usersRoute = require('./routes/users');


//Middleware to parse incoming requests with JSON and urlencoded payloads
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Add Routes to the middleware handling path, specifying the respective URL path
app.use('/api/posts', postsRoute);
app.use('/api/users', usersRoute);

module.exports = app; // export the express app.