Prueba Técnica - BackEnd Developer (Node.js + Express.js + MongoDB)

Descripción

Esta prueba técnica consiste en desarrollar una aplicación para gestionar usuarios y sus transacciones.
El objetivo es evaluar la capacidad del candidato para trabajar con APIs RESTful y bases de datos NoSQL como MongoDB.

Esta aplicación permite gestionar usuarios y transacciones de manera sencilla.
Se puede registrar usuarios, realizar transacciones y visualizar el historial de cada usuario.

🔹 Backend: Node.js con Express🔹 Base de Datos: MongoDB

Tecnologías

Backend:

🟢 Node.js

🔥 Express.js

🍃 MongoDB

Estructura del Proyecto

📂 mi-proyecto
  📂 backend
    📁 src
      📌 routes
      🔧 controllers
      🗂 models
      📜 index.js
    📜 package.json
    📖 README.md

Instalación y Configuración

1. Clonar el Repositorio

git clone https://github.com/Hyvegac/Pruebabackend.git
cd mi-proyecto

2. Configuración del Backend

a- Ir a la carpeta del backend

cd backend

b- Instalar dependencias

npm install

c- Configurar variables de entorno

Crear un archivo .env en la carpeta backend con el siguiente contenido:

PORT=3000
MONGO_URI=mongodb://localhost:27017/prueba_backend

d- Iniciar el servidor

npm run dev

El backend estará disponible en: http://localhost:3000

Uso de la Aplicación

Endpoints de la API

Usuarios:

POST /users - Crear un nuevo usuario

GET /users - Obtener lista de usuarios

Transacciones:

POST /transactions - Crear una transacción

GET /transactions/:userId - Obtener historial de transacciones de un usuario

Modelo de Base de Datos (MongoDB)

La base de datos tiene dos colecciones principales:

Usuarios:

{
  "_id": "ObjectId",
  "name": "Juan Perez",
  "email": "juan@example.com",
  "created_at": "2025-03-18T12:00:00Z"
}

Transacciones:

{
  "_id": "ObjectId",
  "user_id": "ObjectId",
  "amount": 100.00,
  "type": "deposit",
  "created_at": "2025-03-18T12:05:00Z"
}

Autor

Nombre: 🧑‍💻 Heidy Yulieth Vega

Email: 📧 yuliheidy67@gmail.com

