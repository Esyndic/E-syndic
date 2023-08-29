const express = require("express");
const cors = require("cors");
const cookieParser =require("cookie-parser")

const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser())
const syndic = require("./routes/syndic");
const tenantsRoute = require("./routes/tenants");
const personnel = require("./routes/personnel");
const facture = require("./routes/facture");
app.use("/api/syndic", syndic);
app.use("/api/tenants", tenantsRoute);
app.use("/api/personnel", personnel);
app.use("/api/facture", facture);
module.exports = app;
