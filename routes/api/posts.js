const express = require("express");
const router = express.Router();

// @route: GET api/posts
// @description: Register users, add or edit profiles
// @access: Public
router.get("/", (req, res) => res.send("Posts route"));

module.exports = router;
