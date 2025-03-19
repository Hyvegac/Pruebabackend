require('dotenv').config();

if (!process.env.MONGODB_URI) {
  console.error("❌ ERROR: La variable de entorno MONGODB_URI no está definida.");
  process.exit(1); // Detiene la ejecución si falta la configuración
}

module.exports = {
  MONGODB_URI: process.env.MONGODB_URI,
};
