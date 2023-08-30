const express = require("express");
const router = express.Router();
const {
    getFacture,
    addFacture,
    deleteFacture,
    updateFacture,
  } = require("../controllers/facture");
  
  /// POSTS ROUTES ///
  
  //GET request to fetch all Factures. NOTE This must come before route for id.
  router.get("/get", getFacture);
  // POST request for creating a new Facture.
  router.post("/add", addFacture);
  // DELETE request for removing a Facture.
  router.delete("/delete/:id", deleteFacture);
  // UPDATE request for updating a Facture.
  router.put("/update/:id",updateFacture);
  
  module.exports = router;