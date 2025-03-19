const mongoose = require("mongoose");

const DireccionSchema = new mongoose.Schema({
  calle: { type: String, required: true },
  ciudad: { type: String, required: true },
  pais: { type: String, required: true },
  codigo_postal: { type: String, required: true }
});

const UsuarioSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  edad: { type: Number },
  fecha_creacion: { type: Date, default: Date.now },
  direcciones: { type: [DireccionSchema], validate: v => Array.isArray(v) && v.length > 0 }
});

const Usuario = mongoose.model("Usuario", UsuarioSchema);

module.exports = Usuario;
