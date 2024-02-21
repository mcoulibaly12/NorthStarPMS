import type { FindProposalById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Proposal from 'src/components/Proposal/Proposal'

export const QUERY = gql`
  query FindProposalById($id: Int!) {
    proposal: proposal(id: $id) {
      id
      proposalCode
      department
      agency
      title
      solicitationNumber
      bidApprovalDate
      dueDate
      questionsDueDate
      sourceOfRfp
      naics
      setAside
      contractType
      competition
      specialSkills
      clearenceRequirements
      custonmerId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Proposal not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ proposal }: CellSuccessProps<FindProposalById>) => {
  return <Proposal proposal={proposal} />
}
