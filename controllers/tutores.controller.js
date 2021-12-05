const Tutor = require("../models/Tutor.model");
const bcrypt = require("bcrypt");

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
    const exist = await Tutor.findOne({ email: req.body.email });
    if (!exist) {
      let passwordHash = await bcrypt.hash(req.body.password, 10);
      req.body.password = passwordHash;
      const user = await Tutor.create(req.body);
      res.status(201).json(user);
    } else {
      res
        .status(400)
        .json({ msg: `User with email: ${req.body.email} already exists` });
    }
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const updateUser = async (req, res) => {
  try {
    const user = await Tutor.findOneAndUpdate({ _id: req.body._id }, req.body);
    if (!user) {
      res.status(404);
    } else {
      res.status(202).json(user);
    }
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
  updateUser,
};
