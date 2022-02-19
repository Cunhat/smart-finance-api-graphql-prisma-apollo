import { prismaClient } from "../src/database/prismaClient";

type GetAccountById = {
  id: string;
};

type InputGetAccountById = {
  input: GetAccountById;
};

const resolvers = {
  Query: {
    allAccounts: () => {
      return prismaClient.account.findMany();
    },
    getAccountById: (parent, args: InputGetAccountById) => {
      return prismaClient.account.findUnique({
        where: {
          id: args.input.id,
        },
      });
    },
    allCategories: () => {
      return prismaClient.category.findMany();
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
    createCategory: (parent, args) => {
      return prismaClient.category.create({
        data: {
          name: args.input.name,
        },
      });
    },
  },
};

module.exports = { resolvers };
