const express = require("express");
const cors = require("cors");
const cookieParser =require("cookie-parser")

const app = express();
app.use(cors())
app.use(express.json());
app.use(cookieParser())
const syndic = require("./routes/syndic");
const tenantsRoute = require("./routes/tenants");
const personnel = require("./routes/personnel");
const facture = require("./routes/facture");
const {verifyToken,logout} =require("./database/jwt-auth")
app.use("/api/syndic", syndic);
app.use("/api/tenants", tenantsRoute);
app.use("/api/personnel", personnel);
app.use("/api/facture", facture);
app.post("/api/auth",verifyToken)
app.get("/api/logout",logout)
module.exports = app;
