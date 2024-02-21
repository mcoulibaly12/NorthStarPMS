export const schema = gql`
  type CustomerPointOfContact {
    id: Int!
    firstName: String!
    lastName: String!
    email: String!
    phoneNumber: String!
    customerId: Int!
    customer: Customer!
  }

  type Query {
    customerPointOfContacts: [CustomerPointOfContact!]! @requireAuth
    customerPointOfContact(id: Int!): CustomerPointOfContact @requireAuth
  }

  input CreateCustomerPointOfContactInput {
    firstName: String!
    lastName: String!
    email: String!
    phoneNumber: String!
    customerId: Int!
  }

  input UpdateCustomerPointOfContactInput {
    firstName: String
    lastName: String
    email: String
    phoneNumber: String
    customerId: Int
  }

  type Mutation {
    createCustomerPointOfContact(
      input: CreateCustomerPointOfContactInput!
    ): CustomerPointOfContact! @requireAuth
    updateCustomerPointOfContact(
      id: Int!
      input: UpdateCustomerPointOfContactInput!
    ): CustomerPointOfContact! @requireAuth
    deleteCustomerPointOfContact(id: Int!): CustomerPointOfContact! @requireAuth
  }
`
