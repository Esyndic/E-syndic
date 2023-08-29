const db = {};


db.tenanats = require('./tenants')
db.syndic = require('./syndic')
db.personnel = require('./personnel')


module.exports = db;
