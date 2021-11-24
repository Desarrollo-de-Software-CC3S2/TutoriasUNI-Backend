const mongoose = require("mongoose");

const TutorSchema = new mongoose.Schema({
  email: { type: String, required: true, trim: true },
  password: { type: String, required: true },
  name: { type: String, required: true, trim: true, maxlength: 25 },
  lastname: { type: String, required: true, trim: true, maxlength: 25 },
  rol: {
    type: String,
    trim: true,
    maxlength: 7,
    default: "tutor",
  },
  cursos: { type: [String], default: [] },
});

module.exports = mongoose.model("Tutor", TutorSchema);
