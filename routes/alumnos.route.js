const express = require("express");
const router = express.Router();

const {
  getAllUsers,
  getUser,
  createUser,
  getUserAllCourses,
  getUserCourse,
  addUserToCourse,
} = require("../controllers/alumnos.controller");

router.route("/").get(getAllUsers).post(createUser);
router.route("/:userId").get(getUser);
router.route("/:userId/courses").get(getUserAllCourses);
router
  .route("/:userId/courses/:courseId")
  .get(getUserCourse)
  .patch(addUserToCourse);

module.exports = router;
