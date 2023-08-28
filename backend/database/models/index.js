const db = {};

db.users = require('./users')
db.syndic = require('./syndic')
db.personnel = require('./personnel')


module.exports = db;