const User = require('../models/userModel');

const createUser = async (req, res) => {
    try {
        const { nombre, email, edad, direcciones } = req.body;

        // Validación de email único
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'El email ya está registrado' });
        }

        const newUser = new User({ nombre, email, edad, direcciones });
        await newUser.save();

        res.status(201).json({ message: 'Usuario creado', user: newUser });
    } catch (error) {
        res.status(500).json({ message: 'Error al crear usuario', error: error.message });
    }
};

const getUsers = async (req, res) => {
    try {
        const { page = 1, limit = 10 } = req.query;
        const users = await User.find()
            .limit(parseInt(limit))
            .skip((parseInt(page) - 1) * parseInt(limit));

        res.json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener usuarios', error: error.message });
    }
};

const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener usuario', error: error.message });
    }
};

const existingEmail = await User.findOne({ email: req.body.email });
if (existingEmail && existingEmail._id.toString() !== req.params.id) {
  return res.status(400).json({ message: 'El email ya está en uso' });
}

const updateUser = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.json({ message: 'Usuario actualizado', user: updatedUser });
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar usuario', error: error.message });
    }
};

const deleteUser = async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if (!deletedUser) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.json({ message: 'Usuario eliminado' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar usuario', error: error.message });
    }
};

const searchUsersByCity = async (req, res) => {
    try {
        const { ciudad } = req.query;
        if (!ciudad) {
            return res.status(400).json({ message: 'Debes proporcionar una ciudad' });
        }

        const users = await User.find({ 'direcciones.ciudad': ciudad });
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error en la búsqueda', error: error.message });
    }
};

module.exports = {
    createUser,
    getUsers,
    getUserById,
    updateUser,
    deleteUser,
    searchUsersByCity
};
