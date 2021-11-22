const express = require("express");
const router = express.Router();

const {
  getAllUsers,
  getUser,
  createUser,
  getUserAllCourses,
  getUserCourse,
} = require("../controllers/tutores.controller");

router.route("/").get(getAllUsers).post(createUser);
router.route("/:userId").get(getUser);
router.route("/:userId/courses").get(getUserAllCourses);
router.route("/:userId/courses/:courseId").get(getUserCourse);

module.exports = router;