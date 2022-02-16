import { prismaClient } from "../src/database/prismaClient";

const resolvers = {
  Query: {
    allAccounts: () => {
      return prismaClient.account.findMany();
    },
  },
  Mutation: {
    createAccount: (parent, args) => {
      return prismaClient.account.create({
        data: {
          name: args.input.name,
          type: args.input.type,
        },
      });
    },
  },
};

module.exports = { resolvers };
