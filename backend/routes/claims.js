const express = require("express");
const router = express.Router();

const {
  getAllClaims,
  addClaims,
  deleteClaims,
} = require("../controllers/claims");

router.get("/getAll", getAllClaims);

router.post("/add", addClaims);

router.delete("/delete/:id", deleteClaims);

module.exports = router;
