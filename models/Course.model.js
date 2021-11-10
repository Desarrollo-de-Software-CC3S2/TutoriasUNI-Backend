const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
  courseId: { type: String, required: true },
  nombre: { type: String, required: true, trim: true, maxlength: 25 },
  tema: { type: String, required: true, trim: true, maxlength: 25 },
  codigo: { type: String, required: true, trim: true, maxlength: 10 },
  profesorId: { type: String, required: true},
  profesor: { type: String, required: true, trim: true, maxlength: 50 },
  contenido: [mongoose.Schema.Types.Mixed],
});

module.exports = mongoose.model("Course", CourseSchema);
