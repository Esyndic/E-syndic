const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    next();
  });
app.use(cors({credentials:true, origin: 'http://localhost:5173'}))
app.use(express.json());
app.use(cookieParser());
const syndic = require("./routes/syndic");
const tenantsRoute = require("./routes/tenants");
const personnel = require("./routes/personnel");
const facture = require("./routes/facture");
const claims = require("./routes/claims");
const { verifyToken, logout } = require("./database/jwt-auth");
app.use("/api/syndic", syndic);
app.use("/api/tenants", tenantsRoute);
app.use("/api/personnel", personnel);
app.use("/api/claims", claims);
app.use("/api/facture", facture);
app.post("/api/auth", verifyToken);
app.get("/api/logout", logout);
module.exports = app;
