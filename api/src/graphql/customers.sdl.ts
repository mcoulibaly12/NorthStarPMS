export const schema = gql`
  type Customer {
    id: Int!
    title: String!
    address: String!
    email: String!
    phoneNumber: String!
    csz: String!
    pointOfContact: CustomerPointOfContact
  }

  type Query {
    customers: [Customer!]! @requireAuth
    customer(id: Int!): Customer @requireAuth
  }

  input CreateCustomerInput {
    title: String!
    address: String!
    email: String!
    phoneNumber: String!
    csz: String!
  }

  input UpdateCustomerInput {
    title: String
    address: String
    email: String
    phoneNumber: String
    csz: String
  }

  type Mutation {
    createCustomer(input: CreateCustomerInput!): Customer! @requireAuth
    updateCustomer(id: Int!, input: UpdateCustomerInput!): Customer!
      @requireAuth
    deleteCustomer(id: Int!): Customer! @requireAuth
  }
`
