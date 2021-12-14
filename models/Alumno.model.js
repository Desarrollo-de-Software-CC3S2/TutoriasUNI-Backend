const mongoose = require("mongoose");

const AlumnoSchema = new mongoose.Schema({
  email: { type: String, required: true, trim: true },
  password: { type: String, required: true },
  name: { type: String, required: true, trim: true, maxlength: 25 },
  lastname: { type: String, required: true, trim: true, maxlength: 25 },
  rol: {
    type: String,
    trim: true,
    maxlength: 7,
    default: "alumno",
  },
  cursos: {
    type: [
      {
        id_curso: String,
        nombre: String,
        codigo: String,
        tema: String,
        nombre_tutor: String,
      },
    ],
    default: [],
  },
  chatbot: {
    type: [
      {
        id_bot: String,
        text: String,
        isBot: Boolean,
      },
    ],
    default: [],
  },
});

module.exports = mongoose.model("Alumno", AlumnoSchema);
