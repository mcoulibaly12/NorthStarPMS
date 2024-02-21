export const schema = gql`
  type Company {
    id: Int!
    companyName: String!
    addressOne: String!
    addressTwo: String
    city: String!
    state: String!
    zipCode: String!
    dunsNumber: Int
    cageNumber: Int
    websiteUrl: String!
    phoneNumber: String!
    certificates: [Certificate]!
    socioeconDesignations: [SocioEconDesignation]!
    users: [User]!
  }

  type Query {
    companies: [Company!]! @requireAuth
    company(id: Int!): Company @requireAuth
  }

  input CreateCompanyInput {
    companyName: String!
    addressOne: String!
    addressTwo: String
    city: String!
    state: String!
    zipCode: String!
    dunsNumber: Int
    cageNumber: Int
    websiteUrl: String!
    phoneNumber: String!
  }

  input UpdateCompanyInput {
    companyName: String
    addressOne: String
    addressTwo: String
    city: String
    state: String
    zipCode: String
    dunsNumber: Int
    cageNumber: Int
    websiteUrl: String
    phoneNumber: String
  }

  type Mutation {
    createCompany(input: CreateCompanyInput!): Company! @requireAuth
    updateCompany(id: Int!, input: UpdateCompanyInput!): Company! @requireAuth
    deleteCompany(id: Int!): Company! @requireAuth
  }
`
