const express = require("express");
const router = express.Router();

const {
  addCourse,
  getAllCourses,
  getCourse,
} = require("../controllers/courses.controller");

router.route("/").get(getAllCourses).post(addCourse);
router.route("/:courseId").get(getCourse);

module.exports = router;
