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
    subcategory: SubCategory
    account: Account
    user: User
    tag: Tag
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

  type Tag {
    id: String!
    name: String!
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

  input CreateTag {
    name: String!
  }

  type Query {
    allAccounts: [Account!]!
    getAccountById(input: GetAccountById!): Account!
    allCategories: [Category!]!
    getAllSubCategories: [SubCategory!]!
    getUsers: [User!]!
    getTransaction: [Transaction!]!
    getTags: [Tag!]!
  }

  type Mutation {
    createAccount(input: CreateAccountInput!): Account
    createCategory(input: CreateCategory!): Category
    createSubCategory(input: CreateSubCategory!): SubCategory
    createTransaction(input: CreateTransaction!): Transaction
    createUser(input: CreateUser!): User
    createTag(input: CreateTag!): Tag
  }
`;

module.exports = { typeDefs };
