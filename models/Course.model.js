const mongoose = require("mongoose");
const short = require("shortid");

const CourseSchema = new mongoose.Schema({
  nombre: { type: String, required: true, trim: true, maxlength: 25 },
  tema: { type: String, required: true, trim: true, maxlength: 25 },
  codigo: {
    type: String,
    trim: true,
    maxlength: 10,
    default: short.generate(),
  },
  profesorId: { type: String, required: true },
  contenido: { type: [{
    tipo: String,
    link: String
  }], default: [] },
});

module.exports = mongoose.model("Course", CourseSchema);
