const express = require("express");
const router = express.Router();

const {
  getAllUsers,
  getUser,
  createUser,
} = require("../controllers/users.controller");


router.route("/").get(getAllUsers).post(createUser);
router.route("/:userId").get(getUser);

module.exports = router;
