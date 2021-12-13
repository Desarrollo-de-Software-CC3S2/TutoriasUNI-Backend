const express = require("express");
const router = express.Router();

const { get_welcome } = require("../controllers/welcome.controller");

router.route("/").get(get_welcome);

module.exports = router;
