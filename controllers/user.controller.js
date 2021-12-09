const User = require("../models/User.model");

const getUserAllCourses = async (req, res) => {
  try {
    const courses = await User.findOne({});
  } catch (error) {
    res.status(500).json({ msg: error });
  }
  res.send("user all courses");
};

const getUserCourse = (req, res) => {
  res.send("user course");
};

const addUserToCourse = (req, res) => {
  res.send("añadirse a un curso");
};

module.exports = {
  getUserAllCourses,
  getUserCourse,
  addUserToCourse,
};
