const express = require("express");
const router = express.Router();

const {
  getUserAllCourses,
  getUserCourse,
  addUserToCourse,
} = require("../controllers/user.controller");

router.route("/").get(getUserAllCourses).patch(addUserToCourse);
router.route("/:courseId").get(getUserCourse);

module.exports = router;
