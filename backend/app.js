const express = require('express');

//Create an Express App
const app = express();

//Require application Route modules
const syndicRoute = require('./routes/syndic');
const usersRoute = require('./routes/users');
const personnelRoute = require('./routes/personnel');

//Middleware to parse incoming requests with JSON and urlencoded payloads
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Add Routes to the middleware handling path, specifying the respective URL path
app.use('/api/syndic', syndicRoute);
app.use('/api/users', usersRoute);
app.use('/api/personnel', personnelRoute);


module.exports = app; // export the express app.