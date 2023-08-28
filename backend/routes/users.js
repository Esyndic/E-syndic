const express = require("express");
const router = express.Router();

// Require controller modules.
const {
  getAllUsers,
  addUser,
  getOneUser,
  deleteUser,
  updateUser,
} = require("../controllers/users");

/// USERS ROUTES ///

//GET request to fetch all users. NOTE This must come before route for id.
router.get("/getAll", getAllUsers);
// GET request for one user.
router.get("/:iduser", getOneUser);
// POST request for creating a user.
router.post("/add", addUser);
// DELETE request for removing a user.
router.delete("/delete/:iduser", deleteUser);
// UPDATE request for updating a user.
router.put("/update/:iduser", updateUser);

module.exports = router;
