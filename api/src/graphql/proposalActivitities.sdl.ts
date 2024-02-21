export const schema = gql`
  type ProposalActivitity {
    id: Int!
    description: String!
    proposalId: Int!
    Proposal: Proposal!
  }

  type Query {
    proposalActivitities: [ProposalActivitity!]! @requireAuth
    proposalActivitity(id: Int!): ProposalActivitity @requireAuth
  }

  input CreateProposalActivitityInput {
    description: String!
    proposalId: Int!
  }

  input UpdateProposalActivitityInput {
    description: String
    proposalId: Int
  }

  type Mutation {
    createProposalActivitity(
      input: CreateProposalActivitityInput!
    ): ProposalActivitity! @requireAuth
    updateProposalActivitity(
      id: Int!
      input: UpdateProposalActivitityInput!
    ): ProposalActivitity! @requireAuth
    deleteProposalActivitity(id: Int!): ProposalActivitity! @requireAuth
  }
`
