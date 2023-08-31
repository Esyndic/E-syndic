const db = {};

db.tenants = require('./tenants')
db.syndic = require('./syndic')
db.personnel = require('./personnel')
db.facture=require('./facture')
db.claims=require('./claims')

module.exports = db;
