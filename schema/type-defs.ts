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
  }

  type SubCategory {
    id: String
    name: String
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
  }

  type Query {
    allAccounts: [Account!]!
    getAccountById(input: GetAccountById!): Account!
    allCategories: [Category!]!
    getAllSubCategories: [SubCategory!]!
  }

  type Mutation {
    createAccount(input: CreateAccountInput!): Account
    createCategory(input: CreateCategory!): Category
    createSubCategory(input: CreateSubCategory!): SubCategory
  }
`;

module.exports = { typeDefs };
