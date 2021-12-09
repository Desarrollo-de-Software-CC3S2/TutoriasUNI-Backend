const Alumno = require("../models/Alumno.model");
const Tutor = require("../models/Tutor.model");
const bcrypt = require("bcrypt");

const login = async (req, res) => {
  try {
    const { email: email, password: password } = req.params;
    let user = await Alumno.findOne({ email: email });
    if (!user) {
      user = await Tutor.findOne({ email: email });
    }
    const exist = await bcrypt.compare(password, user.password);
    if (!exist) {
      return res.status(404).json({ msg: "Unregistered user" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const register = async (req, res) => {
  try {
    const exist = await Alumno.findOne({ email: req.body.email });
    if (!exist) {
      let passwordHash = await bcrypt.hash(req.body.password, 10);
      req.body.password = passwordHash;
      const user = await Alumno.create(req.body);
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

module.exports = {
  login,
  register,
};
