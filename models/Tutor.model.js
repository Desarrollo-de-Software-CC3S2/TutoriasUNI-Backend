const mongoose = require("mongoose");

const TutorSchema = new mongoose.Schema({
  usuario: { type: String, required: true, trim: true },
  contraseña: { type: String, required: true },
  nombre: { type: String, required: true, trim: true, maxlength: 25 },
  apellido: { type: String, required: true, trim: true, maxlength: 25 },
  rol: {
    type: String,
    trim: true,
    maxlength: 7,
    default: "tutor",
  },
  cursos: { type: [String], default: [] },
});

module.exports = mongoose.model("Tutor", TutorSchema);
