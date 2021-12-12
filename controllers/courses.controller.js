const Course = require("../models/Course.model");
const Tutor = require("../models/Tutor.model");
const Alumno = require("../models/Alumno.model");

const createCourse = async (req, res) => {
  try {
    const course = await Course.create(req.body);
    res.status(201).json(course);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const deleteCourse = async (req, res) => {
  try {
    const { courseId: courseId } = req.params;
    const course = await Course.findOneAndDelete({ _id: courseId });
    if (!course) {
      return res.status(404).json({ msg: `No course with id : ${courseId}` });
    }
    const tutor = await Tutor.findOne({ _id: course.profesorId });
    var cursos = tutor.cursos.filter((curso) => {
      if (curso.id_curso == courseId) return false;
      return true;
    });
    Tutor.updateOne({ _id: course.profesorId }, { cursos: cursos });
    var alumnos = await Alumno.find({});
    alumnos = alumnos.filter((alumno) => {
      for (curso of alumno.cursos) {
        if (curso.id_curso == courseId) return true;
      }
      return false;
    });
    for (alumno of alumnos) {
      cursos = alumno.cursos.filter((curso) => {
        if (curso.id_curso == courseId) return false;
        return true;
      });
      Alumno.updateOne({ _id: alumno._id }, { cursos: cursos });
    }
    res.status(200).json(course);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const subirVideo = async (req, res) => {
  try {
    const { courseId: courseId } = req.params;
    const course = await Course.findOneAndUpdate({ _id: courseId }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!course) {
      return res.status(404).json({ msg: `No course with id : ${courseId}` });
    }
    res.status(200).json(course);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const updateCourse = async (req, res) => {
  try {
    const { courseId: courseId } = req.params;
    const course = await Course.findOneAndUpdate({ _id: courseId }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!course) {
      return res.status(404).json({ msg: `No course with id : ${courseId}` });
    }
    res.status(200).json(course);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getCourse = async (req, res) => {
  try {
    const { courseId: courseId } = req.params;
    const course = await Course.findOne({ _id: courseId });
    if (!course) {
      return res.status(404).json({ msg: `No course with id : ${courseId}` });
    }
    res.status(201).json(course);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find({});
    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = {
  createCourse,
  deleteCourse,
  updateCourse,
  getAllCourses,
  getCourse,
};
