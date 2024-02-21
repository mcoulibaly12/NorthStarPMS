import type { FindProposalActivitityById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import ProposalActivitity from 'src/components/ProposalActivitity/ProposalActivitity'

export const QUERY = gql`
  query FindProposalActivitityById($id: Int!) {
    proposalActivitity: proposalActivitity(id: $id) {
      id
      description
      proposalId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>ProposalActivitity not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  proposalActivitity,
}: CellSuccessProps<FindProposalActivitityById>) => {
  return <ProposalActivitity proposalActivitity={proposalActivitity} />
}
