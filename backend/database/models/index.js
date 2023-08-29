const db = {};

db.users = require('./tenants')
db.syndic = require('./syndic')
db.personnel = require('./personnel')


module.exports = db;