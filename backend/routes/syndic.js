const express = require("express");
const router = express.Router();

// Require controller modules.
const {
  getSyndic,
  addSyndic,
  //getOnePost,
  deleteSyndic,
  updateSyndic,
} = require("../controllers/syndic");

//GET request to fetch all posts. NOTE This must come before route for id.
router.get("/getAll",getSyndic);
// GET request for one post.
//router.get("/:idpost", getOnePost);
// POST request for creating a new post.
router.post("/add", addSyndic);
// DELETE request for removing a post.
router.delete("/delete/:idsyndic", deleteSyndic);
// UPDATE request for updating a post.
router.put("/update/:idsyndic", updateSyndic);

module.exports = router;
