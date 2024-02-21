export const schema = gql`
  type PointOfContact {
    id: Int!
    firstName: String!
    lastName: String!
    title: String!
    email: String!
    phoneNumber: String!
    companyId: Int!
    Company: Company!
  }

  type Query {
    pointOfContacts: [PointOfContact!]! @requireAuth
    pointOfContact(id: Int!): PointOfContact @requireAuth
  }

  input CreatePointOfContactInput {
    firstName: String!
    lastName: String!
    title: String!
    email: String!
    phoneNumber: String!
    companyId: Int!
  }

  input UpdatePointOfContactInput {
    firstName: String
    lastName: String
    title: String
    email: String
    phoneNumber: String
    companyId: Int
  }

  type Mutation {
    createPointOfContact(input: CreatePointOfContactInput!): PointOfContact!
      @requireAuth
    updatePointOfContact(
      id: Int!
      input: UpdatePointOfContactInput!
    ): PointOfContact! @requireAuth
    deletePointOfContact(id: Int!): PointOfContact! @requireAuth
  }
`
