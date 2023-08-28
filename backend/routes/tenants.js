const express = require("express");
const router = express.Router();


const {
  getAllTenants,
  addTenants,
  getOneTenants,
  deleteTenants,
  updateTenants,
} = require("../controllers/tenants");


router.get("/getAll", getAllTenants);

router.get("/:id", getOneTenants);

router.post("/add", addTenants);

router.delete("/delete/:id", deleteTenants);

router.put("/update/:id", updateTenants);

module.exports = router;
