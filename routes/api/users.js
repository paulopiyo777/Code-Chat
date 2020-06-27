const express = require("express");
const router = express.Router();

// @route: GET api/users
// @description: Register users, add or edit profiles
// @access: Public
router.get("/", (req, res) => res.send("User route"));

module.exports = router;
