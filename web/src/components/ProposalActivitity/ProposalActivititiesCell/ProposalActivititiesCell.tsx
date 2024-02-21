import type { FindProposalActivitities } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import ProposalActivitities from 'src/components/ProposalActivitity/ProposalActivitities'

export const QUERY = gql`
  query FindProposalActivitities {
    proposalActivitities {
      id
      description
      proposalId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No proposalActivitities yet. '}
      <Link to={routes.newProposalActivitity()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  proposalActivitities,
}: CellSuccessProps<FindProposalActivitities>) => {
  return <ProposalActivitities proposalActivitities={proposalActivitities} />
}
