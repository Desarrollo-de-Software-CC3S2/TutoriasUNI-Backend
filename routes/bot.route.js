const express = require("express");
const router = express.Router();

const { mensaje_bot } = require("../controllers/bot.controller");

router.route("/").post(mensaje_bot);

module.exports = router;
