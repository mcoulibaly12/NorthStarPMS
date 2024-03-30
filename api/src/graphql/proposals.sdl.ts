export const schema = gql`
  type Proposal {
    id: Int!
    activities: [ProposalActivity]!
    proposalCode: Int!
    department: String!
    agency: String!
    title: String!
    solicitationNumber: Int!
    bidApprovalDate: DateTime
    dueDate: DateTime!
    questionsDueDate: DateTime!
    sourceOfRfp: String!
    naics: String!
    setAside: Boolean!
    contractType: String!
    competition: [String]!
    specialSkills: String!
    clearenceRequirements: String!
    custonmerId: Int!
  }

  type Query {
    proposals: [Proposal!]! @requireAuth
    proposal(id: Int!): Proposal @requireAuth
  }

  input CreateProposalInput {
    proposalCode: Int!
    department: String!
    agency: String!
    title: String!
    solicitationNumber: Int!
    bidApprovalDate: DateTime
    dueDate: DateTime!
    questionsDueDate: DateTime!
    sourceOfRfp: String!
    naics: String!
    setAside: Boolean!
    contractType: String!
    competition: [String]!
    specialSkills: String!
    clearenceRequirements: String!
    custonmerId: Int!
  }

  input UpdateProposalInput {
    proposalCode: Int
    department: String
    agency: String
    title: String
    solicitationNumber: Int
    bidApprovalDate: DateTime
    dueDate: DateTime
    questionsDueDate: DateTime
    sourceOfRfp: String
    naics: String
    setAside: Boolean
    contractType: String
    competition: [String]!
    specialSkills: String
    clearenceRequirements: String
    custonmerId: Int
  }

  type Mutation {
    createProposal(input: CreateProposalInput!): Proposal! @requireAuth
    updateProposal(id: Int!, input: UpdateProposalInput!): Proposal!
      @requireAuth
    deleteProposal(id: Int!): Proposal! @requireAuth
  }
`
