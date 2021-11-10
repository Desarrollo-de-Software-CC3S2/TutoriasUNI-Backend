const addCourse = (req, res) => {
  res.send("crear curso");
}

const getCourse = (req, res) => {
  res.send("obtener curso");
}

const getAllCourses = (req, res) => {
  res.send("obtener todos los cursos");
}

module.exports = {
  addCourse,
  getAllCourses,
  getCourse,
}