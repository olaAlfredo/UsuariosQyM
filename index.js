const {ApolloServer} = require('apollo-server');
const mongoose = require('mongoose');
const typeDefs = require('./src/schemas/userSchema');
const resolvers = require('./src/resolvers/userResolver');

const startServer = async () => {
    await mongoose.connect('mongodb+srv://Andromeda:Tormenta@dbeducation.v650p.mongodb.net/?retryWrites=true&w=majority&appName=dbeducation');
    const server = new 
    ApolloServer({ typeDefs, resolvers });

    server.listen().then(({url}) => {
        console.log(`Servidor corriendo en ${url}`);
    });
};

startServer();