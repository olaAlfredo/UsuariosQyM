const { gql } = require('apollo-server');

const typeDefs = gql`
    type User {
        _id: ID!
        nombre: String!
        email: String!
        password: String!
        direccion: String!
        telefono: String!
        fechaRegistro: String
        tipoUsuario: String!
        metodoPago: String!
    }

    type Query {
        users: [User]!
    }

    type Mutation {
        createUser(nombre: String!, email: String!, password: String!, direccion: String!, telefono: String!, fechaRegistro: String, tipoUsuario: String!, metodoPago: String!): User!
        updateUser(_id: ID!, nombre: String!, email: String!, password: String!, direccion: String!, telefono: String!, fechaRegistro: String, tipoUsuario: String!, metodoPago: String!): User!
        deleteUser(_id: ID!): User!
    }

`;

module.exports = typeDefs;
    