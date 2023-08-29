const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const syndic = require("./routes/syndic");
const tenantsRoute = require("./routes/tenants");
const personnel = require("./routes/personnel");

app.use("/api/syndic", syndic);
app.use("/api/tenants", tenantsRoute);
app.use("/api/personnel", personnel);

module.exports = app;
