const User = require('../models/usersModel');

module.exports = { 
    getAllUsers: async () => {
        return await User.find();
    },

    createUser: async (nombre,email,password,direccion,telefono,fechaRegistro,tipoUsuario,metodoPago) => {
        const user = new User({nombre,email,password,direccion,telefono,fechaRegistro,tipoUsuario,metodoPago });
        return await user.save();
    },

    updateUser: async (_id,nombre,email,password,direccion,telefono,fechaRegistro,tipoUsuario,metodoPago) => {
        return await User.findByIdAndUpdate(_id, {nombre,email,password,direccion,telefono,fechaRegistro,tipoUsuario,metodoPago});
    },

    deleteUser: async (_id) => {
        return await User.findByIdAndDelete(_id);
    }
}
