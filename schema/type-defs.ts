import { gql } from "apollo-server";

const typeDefs = gql`
  type Account {
    id: String
    type: String
    name: String
  }

  input CreateAccountInput {
    name: String!
    type: String!
  }

  type Query {
    allAccounts: [Account!]!
    account(id: String!): Account!
  }

  type Mutation {
    createAccount(input: CreateAccountInput!): Account
  }
`;

module.exports = { typeDefs };
