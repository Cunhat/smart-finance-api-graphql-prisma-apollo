import { ApolloServer, gql } from "apollo-server";

const { typeDefs } = require("../schema/type-defs");
const { resolvers } = require("../schema/resolvers");

const server = new ApolloServer({ resolvers, typeDefs });

server.listen({ port: 4000 });
