import { ApolloServer, gql } from "apollo-server";
import { prismaClient } from "./database/prismaClient";

const typeDefs = gql`
  type Account {
    id: Int
    type: String
    name: String
  }

  type Query {
    allAccounts: [Account!]!
  }
`;

const resolvers = {
  Query: {
    allAccounts: () => {
      return prismaClient.account.findMany();
    },
  },
};

const server = new ApolloServer({ resolvers, typeDefs });

server.listen({ port: 4000 });
