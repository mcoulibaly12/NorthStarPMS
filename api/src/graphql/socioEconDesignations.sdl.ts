export const schema = gql`
  type SocioEconDesignation {
    sedID: Int!
    sedDescription: String!
    companyId: Int!
    Company: Company!
  }

  type Query {
    socioEconDesignations: [SocioEconDesignation!]! @requireAuth
    socioEconDesignation(sedID: Int!): SocioEconDesignation @requireAuth
  }

  input CreateSocioEconDesignationInput {
    sedDescription: String!
    companyId: Int!
  }

  input UpdateSocioEconDesignationInput {
    sedDescription: String
    companyId: Int
  }

  type Mutation {
    createSocioEconDesignation(
      input: CreateSocioEconDesignationInput!
    ): SocioEconDesignation! @requireAuth
    updateSocioEconDesignation(
      sedID: Int!
      input: UpdateSocioEconDesignationInput!
    ): SocioEconDesignation! @requireAuth
    deleteSocioEconDesignation(sedID: Int!): SocioEconDesignation! @requireAuth
  }
`
