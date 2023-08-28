const express = require("express");
const router = express.Router();

// Require controller modules.
const {
  getPersonnel,
  addPersonnel,
  deletePersonnel,
  updatePersonnel,
} = require("../controllers/personnel");

/// POSTS ROUTES ///

//GET request to fetch all personnels. NOTE This must come before route for id.
router.get("/getAll", getPersonnel);
// POST request for creating a new personnel.
router.post("/add", addPersonnel);
// DELETE request for removing a personnel.
router.delete("/delete/:idpersonnel", deletePersonnel);
// UPDATE request for updating a personnel.
router.put("/update/:idpersonnel",updatePersonnel);

module.exports = router;