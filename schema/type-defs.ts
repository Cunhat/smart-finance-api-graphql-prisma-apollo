import { gql } from "apollo-server";

const typeDefs = gql`
  type Account {
    id: String
    type: String
    name: String
  }

  type Category {
    id: String
    name: String
    subCategories: [SubCategory]
  }

  type SubCategory {
    id: String
    name: String
    id_category: String
  }

  type Transaction {
    id: String
    description: String
    date: String
    value: Float
    id_category: String
    id_account: String
  }

  type User {
    id: String
    name: String
    email: String
    password: String
    categories: [Category]
    accounts: [Account]
    transactions: [Transaction]
  }

  input CreateAccountInput {
    name: String!
    type: String!
  }

  input GetAccountById {
    id: String!
  }

  input CreateCategory {
    name: String!
  }

  input CreateSubCategory {
    name: String!
    id_category: String!
  }

  input CreateTransaction {
    description: String!
    date: String!
    value: Float!
    id_category: String!
    id_account: String!
  }

  input CreateUser {
    name: String!
    email: String!
    password: String!
  }

  type Query {
    allAccounts: [Account!]!
    getAccountById(input: GetAccountById!): Account!
    allCategories: [Category!]!
    getAllSubCategories: [SubCategory!]!
    getUsers: [User!]!
  }

  type Mutation {
    createAccount(input: CreateAccountInput!): Account
    createCategory(input: CreateCategory!): Category
    createSubCategory(input: CreateSubCategory!): SubCategory
    createTransaction(input: CreateTransaction!): Transaction
    createUser(input: CreateUser!): User
  }
`;

module.exports = { typeDefs };
