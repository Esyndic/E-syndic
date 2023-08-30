const express = require("express");
const router = express.Router();


const {
  getAllTenants,
  addTenants,
<<<<<<< HEAD
<<<<<<< HEAD
  getOneTenants,
=======
 getOneTenants,
>>>>>>> 226a49f8008eec434f14e464217f868c047c0416
=======
  getOneTenants,
>>>>>>> 5c1c02ef92998bb4f7a6c3b35f874f4cebd99256
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
