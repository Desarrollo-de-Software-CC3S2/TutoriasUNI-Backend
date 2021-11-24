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
        courseId: String,
        tareas: {
          type: [
            {
              name: String,
              resuelto: { type: Boolean, default: false },
            },
          ],
          default: [],
        },
      },
    ],
    default: [],
  },
});

module.exports = mongoose.model("Alumno", AlumnoSchema);
