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

  type Query {
    allAccounts: [Account!]!
    getAccountById(input: GetAccountById!): Account!
    allCategories: [Category!]!
  }

  type Mutation {
    createAccount(input: CreateAccountInput!): Account
    createCategory(input: CreateCategory!): Category
  }
`;

module.exports = { typeDefs };
