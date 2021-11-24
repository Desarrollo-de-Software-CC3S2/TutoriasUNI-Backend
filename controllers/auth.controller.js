const Alumno = require("../models/Alumno.model");

const login = async (req, res) => {
  try {
    const { email: email, password: password } = req.params;
    const user = await Alumno.findOne({ email: email, password: password });
    if (!user) {
      return res.status(404).json({ msg: "Unregistered user" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const register = async (req, res) => {
  try {
    const user = await Alumno.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = {
  login,
  register,
};
