const Tutor = require("../models/Tutor.model");

const getAllUsers = async (req, res) => {
  try {
    const users = await Tutor.find({});
    res.status(200).json({ users });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getUser = async (req, res) => {
  try {
    const { userId: userId } = req.params;
    const user = await Tutor.findOne({ _id: userId });
    if (!user) {
      return res.status(404).json({ msg: `No user with id : ${userId}` });
    }
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const createUser = async (req, res) => {
  try {
    const user = await Tutor.create(req.body);
    res.status(201).json({ user });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getUserAllCourses = async (req, res) => {
  const { userId: userId } = req.params;
  res.send(`Todos los cursos del usuario con id ${userId}`);
};

const getUserCourse = async (req, res) => {
  const { userId: userId, courseId: courseId } = req.params;
  res.send(`El curso con id ${courseId} del usuario con id ${userId}`);
};

module.exports = {
  getAllUsers,
  getUser,
  createUser,
  getUserAllCourses,
  getUserCourse,
};
