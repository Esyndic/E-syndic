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

//nodemailer

const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'slimanimedamine24@gmail.com',
    pass: 'A.m.i.n.e1',
  },
});

app.post('/send-email', (req, res) => {
  const { to, subject, text } = req.body;
  const mailOptions = {
    from: 'slimanimedamine24@gmail.com',
    to,
    subject,
    text,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.error('Error sending email: ' + error);
      res.status(500).json({ error: 'Email could not be sent' });
    } else {
      console.log('Email sent: ' + info.response);
      res.json({ message: 'Email sent successfully' });
    }
  });
});


