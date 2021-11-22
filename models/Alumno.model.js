const mongoose = require("mongoose");

const AlumnoSchema = new mongoose.Schema({
  usuario: { type: String, required: true, trim: true },
  contraseña: { type: String, required: true },
  nombre: { type: String, required: true, trim: true, maxlength: 25 },
  apellido: { type: String, required: true, trim: true, maxlength: 25 },
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
