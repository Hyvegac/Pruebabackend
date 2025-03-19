const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController"); 

router.post("/usuarios", userController.createUser);
router.get("/usuarios", userController.getUsers);
router.get("/usuarios/:id", userController.getUserById);
router.put("/usuarios/:id", userController.updateUser);
router.delete("/usuarios/:id", userController.deleteUser);
router.get("/usuarios/buscar", userController.searchUsersByCity);

module.exports = router;
