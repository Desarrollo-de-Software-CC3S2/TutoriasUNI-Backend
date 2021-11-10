const getUserAllCourses = (req, res) => {
  res.send("user all courses")
}

const getUserCourse = (req, res) => {
  res.send("user course")
}

const addUserToCourse = (req, res) => {
  res.send("añadirse a un curso")
}

module.exports = {
  getUserAllCourses,
  getUserCourse,
  addUserToCourse,
}