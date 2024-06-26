export const schema = gql`
  type User {
    id: Int!
    email: String!
    company: Company
    companyId: Int
    isAdmin: Boolean!
    adminCompanyId: Int
    roles: [Role]!
    hashedPassword: String!
    salt: String!
    resetToken: String
    resetTokenExpiresAt: DateTime
  }

  enum Role {
    ADMIN
    USER
    POC
  }

  type Query {
    users: [User!]! @requireAuth
    user(id: Int!): User @requireAuth
  }

  input CreateUserInput {
    email: String!
    companyId: Int
    isAdmin: Boolean!
    adminCompanyId: Int
    roles: [Role]
    hashedPassword: String!
    salt: String!
    resetToken: String
    resetTokenExpiresAt: DateTime
  }

  input UpdateUserInput {
    email: String
    companyId: Int
    isAdmin: Boolean
    adminCompanyId: Int
    roles: [Role]
    hashedPassword: String
    salt: String
    resetToken: String
    resetTokenExpiresAt: DateTime
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @requireAuth
    updateUser(id: Int!, input: UpdateUserInput!): User! @requireAuth
    deleteUser(id: Int!): User! @requireAuth
  }
`
