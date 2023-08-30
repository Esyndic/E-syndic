const express = require("express");
const router = express.Router();

// Require controller modules.
const {
  getSyndic,
  addSyndic,
  updateSyndic,
  loginSyndic,
} = require("../controllers/syndic");

//GET request to fetch all posts. NOTE This must come before route for id.
router.get("/getAll",getSyndic);
// GET request for one post.
//router.get("/:idpost", getOnePost);
// POST request for creating a new post.
router.post("/add", addSyndic);

router.post("/login", loginSyndic);

// UPDATE request for updating a post.
router.put("/update/:id", updateSyndic);

module.exports = router;
