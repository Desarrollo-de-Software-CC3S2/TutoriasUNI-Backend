const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
  nombre: { type: String, required: true, trim: true, maxlength: 25 },
  tema: { type: String, required: true, trim: true, maxlength: 25 },
  codigo: { type: String, required: true, trim: true, maxlength: 10 },
  profesorId: { type: String, required: true },
  contenido: { type: [mongoose.Schema.Types.Mixed], default: [] },
});

module.exports = mongoose.model("Course", CourseSchema);
