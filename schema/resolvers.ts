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
    getAccountById: (parent: any, args: InputGetAccountById) => {
      return prismaClient.account.findUnique({
        where: {
          id: args.input.id,
        },
      });
    },
    allCategories: () => {
      return prismaClient.category.findMany({
        include: { subCategories: true },
      });
    },
    getAllSubCategories: () => {
      return prismaClient.subCategory.findMany();
    },
  },
  Mutation: {
    createAccount: (parent: any, args) => {
      return prismaClient.account.create({
        data: {
          name: args.input.name,
          type: args.input.type,
        },
      });
    },
    createCategory: (parent: any, args) => {
      return prismaClient.category.create({
        data: {
          name: args.input.name,
        },
      });
    },
    createSubCategory: (parent: any, args) => {
      return prismaClient.subCategory.create({
        data: {
          name: args.input.name,
          id_category: args.input.id_category,
        },
      });
    },
  },
};

module.exports = { resolvers };
