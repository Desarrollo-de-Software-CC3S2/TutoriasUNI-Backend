const express = require("express");
const router = express.Router();

const {
  mensaje_bot,
  guardar_mensaje,
} = require("../controllers/bot.controller");

router.route("/").post(mensaje_bot);
router.route("/:userId").patch(guardar_mensaje);

module.exports = router;
