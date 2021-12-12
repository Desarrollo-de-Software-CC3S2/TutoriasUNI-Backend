const express = require("express");
const router = express.Router();

const {
  createCourse,
  deleteCourse,
  getAllCourses,
  getCourse,
  updateCourse,
} = require("../controllers/courses.controller");

router.route("/").get(getAllCourses).post(createCourse);
router.route("/:courseId").get(getCourse).delete(deleteCourse).patch(updateCourse);

module.exports = router;
