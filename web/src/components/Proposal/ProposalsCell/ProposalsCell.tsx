import type { FindProposals } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Proposals from 'src/components/Proposal/Proposals'

export const QUERY = gql`
  query FindProposals {
    proposals {
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

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No proposals yet. '}
      <Link to={routes.newProposal()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ proposals }: CellSuccessProps<FindProposals>) => {
  return <Proposals proposals={proposals} />
}
