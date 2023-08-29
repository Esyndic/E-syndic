const express = require("express");
const router = express.Router();


const {
  getAllTenants,
  addTenants,
  getOneTenants,
  deleteTenants,
  updateTenants,
  loginTenants,
} = require("../controllers/tenants");
const { getoneByEmail } = require("../database/models/tenants");

router.post("/login", loginTenants);
router.get("/getAll", getAllTenants);

router.get("/:email", getOneTenants);

router.post("/add", addTenants);

router.delete("/delete/:id", deleteTenants);

router.put("/update/:id", updateTenants);

module.exports = router;
