const Alumno = require("../models/Alumno.model");
const Course = require("../models/Course.model");
const Tutor = require("../models/Tutor.model");

const getAllUsers = async (req, res) => {
  try {
    const users = await Alumno.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getUser = async (req, res) => {
  try {
    const { userId: userId } = req.params;
    const user = await Alumno.findOne({ _id: userId });
    if (!user) {
      return res.status(404).json({ msg: `No user with id : ${userId}` });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const createUser = async (req, res) => {
  try {
    const user = await Alumno.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

// mostrar todos los cursos
const getUserAllCourses = async (req, res) => {
  const { userId: userId } = req.params;
  const userData = await Alumno.findById(userId);
  if (userData) {
    const id_cursos = userData.cursos.map((value) => value.id_curso);
    const cursos = await CourseModel.find({ _id: { $in: id_cursos } });
    res.send(cursos);
  } else {
    res.send("Usuario no existe");
  }
};

const getUserCourse = async (req, res) => {
  const { userId: userId, courseId: courseId } = req.params;
  res.send(`El curso con id ${courseId} del usuario con id ${userId}`);
};

const addUserToCourse = async (req, res) => {
  try {
    const { userId: userId, courseId: courseId } = req.params;
    const user_temp = await Alumno.findOne({ _id: userId });
    if (!user_temp) {
      return res.status(404).json({ msg: `No user with id : ${userId}` });
    } else {
      const course = await Course.findOne({ _id: courseId });
      if (!course) {
        return res.status(404);
      } else {
        const tutor = await Tutor.findOne({ _id: course.profesorId });
        let cursos = user_temp.cursos;
        cursos.push({
          id_curso: course._id,
          nombre: course.nombre,
          codigo: course.codigo,
          tema: course.tema,
          nombre_tutor: tutor.name + " " + tutor.lastname,
        });
        const user = await Alumno.findOneAndUpdate(
          { _id: userId },
          { cursos: cursos },
          {
            new: true,
            runValidators: true,
          }
        );
        if (!user) {
          return res.status(404).json({ msg: `No user with id : ${userId}` });
        } else {
          res.status(202).json(user);
        }
      }
    }
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = {
  getAllUsers,
  getUser,
  createUser,
  getUserAllCourses,
  getUserCourse,
  addUserToCourse,
};
