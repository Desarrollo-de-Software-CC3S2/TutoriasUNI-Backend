const Course = require("../models/Course.model");

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
