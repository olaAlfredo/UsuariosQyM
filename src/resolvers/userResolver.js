const userService = require('../services/userService');

const resolvers = {
    Query: {
        users: () => {
            return userService.getAllUsers();
        }
    },
    Mutation: {
        createUser: (_, { nombre,email,password,direccion,telefono,fechaRegistro,tipoUsuario,metodoPago }) =>{
            return userService.createUser(nombre,email,password,direccion,telefono,fechaRegistro,tipoUsuario,metodoPago);
        },
        updateUser: (_, { _id,nombre,email,password,direccion,telefono,fechaRegistro,tipoUsuario,metodoPago}) => {
            return userService.updateUser(_id,nombre,email,password,direccion,telefono,fechaRegistro,tipoUsuario,metodoPago);  
        },
        deleteUser: (_, { _id }) => {
            return userService.deleteUser(_id);
        }
    }
};

module.exports = resolvers;