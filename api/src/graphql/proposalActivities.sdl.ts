export const schema = gql`
  type ProposalActivity {
    id: Int!
    description: String!
    proposalId: Int!
    Proposal: Proposal!
  }

  type Query {
    proposalActivities: [ProposalActivity!]! @requireAuth
    proposalActivity(id: Int!): ProposalActivity @requireAuth
  }

  input CreateProposalActivityInput {
    description: String!
    proposalId: Int!
  }

  input UpdateProposalActivityInput {
    description: String
    proposalId: Int
  }

  type Mutation {
    createProposalActivity(
      input: CreateProposalActivityInput!
    ): ProposalActivity! @requireAuth
    updateProposalActivity(
      id: Int!
      input: UpdateProposalActivityInput!
    ): ProposalActivity! @requireAuth
    deleteProposalActivity(id: Int!): ProposalActivity! @requireAuth
  }
`
