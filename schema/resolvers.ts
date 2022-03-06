import { prismaClient } from "../src/database/prismaClient";
const bcrypt = require("bcryptjs");

type GetAccountById = {
  id: string;
};

type InputGetAccountById = {
  input: GetAccountById;
};

const userId = "3ac140d7-c877-4f5f-a138-402e629a2b95";

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
    getUsers: () => {
      return prismaClient.user.findMany({
        include: {
          categories: {
            include: {
              subCategories: true,
            },
          },
          accounts: true,
          transactions: true,
        },
      });
    },
    getTransaction: async () => {
      const transactionObj = await prismaClient.transaction.findMany();

      return transactionObj.map(async (transaction) => {
        const user = await prismaClient.user.findUnique({
          where: { id: transaction.id_user },
        });
        const category = await prismaClient.category.findUnique({
          where: { id: transaction.id_category },
          include: { subCategories: true },
        });
        const account = await prismaClient.account.findUnique({
          where: { id: transaction.id_account },
        });

        return {
          ...transaction,
          user: user,
          account: account,
          category: category,
        };
      });
    },
  },
  Mutation: {
    createAccount: (parent: any, args) => {
      return prismaClient.account.create({
        data: {
          name: args.input.name,
          type: args.input.type,
          id_user: userId,
        },
      });
    },
    createCategory: (parent: any, args) => {
      return prismaClient.category.create({
        data: {
          name: args.input.name,
          id_user: userId,
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
    createTransaction: (parent: any, args) => {
      return prismaClient.transaction.create({
        data: {
          description: args.input.description,
          date: new Date(args.input.date),
          value: args.input.value,
          id_category: args.input.id_category,
          id_account: args.input.id_account,
          id_user: userId,
        },
      });
    },
    createUser: async (parent: any, args) => {
      const passwordEncryp = await bcrypt.hash(args.input.password, 12);
      return prismaClient.user.create({
        data: {
          name: args.input.name,
          email: args.input.email,
          password: passwordEncryp,
        },
      });
    },
  },
};

module.exports = { resolvers };
