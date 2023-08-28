const express = require('express');

const app = express();

const postsRoute = require('./routes/syndic');
const tenantsRoute = require('./routes/tenants');



app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use('/api/posts', postsRoute);
app.use('/api/tenants', tenantsRoute);

module.exports = app; 