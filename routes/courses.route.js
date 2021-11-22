const express = require("express");
const router = express.Router();

const {
  createCourse,
  deleteCourse,
  getAllCourses,
  getCourse,
} = require("../controllers/courses.controller");

router.route("/").get(getAllCourses).post(createCourse);
router.route("/:courseId").get(getCourse).delete(deleteCourse);

module.exports = router;
