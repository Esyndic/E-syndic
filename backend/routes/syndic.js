const express = require("express");
const router = express.Router();

// Require controller modules.
const {
  getAllPosts,
  addPost,
  getOnePost,
  deletePost,
  updatePost,
} = require("../controllers/syndic");

/// POSTS ROUTES ///

//GET request to fetch all posts. NOTE This must come before route for id.
router.get("/getAll", getAllPosts);
// GET request for one post.
router.get("/:idpost", getOnePost);
// POST request for creating a new post.
router.post("/add", addPost);
// DELETE request for removing a post.
router.delete("/delete/:idpost", deletePost);
// UPDATE request for updating a post.
router.put("/update/:idpost", updatePost);

module.exports = router;
