export const schema = gql`
  type Certificate {
    id: Int!
    description: String!
    expirationDate: DateTime!
    companyId: Int!
    Company: Company!
  }

  type Query {
    certificates: [Certificate!]! @requireAuth
    certificate(id: Int!): Certificate @requireAuth
  }

  input CreateCertificateInput {
    description: String!
    expirationDate: DateTime!
    companyId: Int!
  }

  input UpdateCertificateInput {
    description: String
    expirationDate: DateTime
    companyId: Int
  }

  type Mutation {
    createCertificate(input: CreateCertificateInput!): Certificate! @requireAuth
    updateCertificate(id: Int!, input: UpdateCertificateInput!): Certificate!
      @requireAuth
    deleteCertificate(id: Int!): Certificate! @requireAuth
  }
`
