const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  usuario: { type: String, required: true, trim: true },
  contraseña: { type: String, required: true },
  nombre: { type: String, required: true, trim: true, maxlength: 25 },
  apellido: { type: String, required: true, trim: true, maxlength: 25 },
  rol: { type: String, required: true, trim: true, maxlength: 7 },
  cursos: [mongoose.Schema.Types.Mixed],
});

module.exports = mongoose.model("User", UserSchema);
