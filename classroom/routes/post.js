const express = require("express");
const router = express.Router();

// POSTS
// Index
router.get("/", (req, res) => {
  res.send("GET for Posts");
});

// Show
router.get("/:id", (req, res) => {
  res.send("GET for Posts ID");
});

// POST
router.post("", (req, res) => {
  res.send("POST for Posts");
});

// DELETE
router.delete("/:id", (req, res) => {
  res.send("DELETE for  Posts ID");
});

module.exports = router;
