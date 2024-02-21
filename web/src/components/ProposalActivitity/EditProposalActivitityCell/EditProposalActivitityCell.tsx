import type {
  EditProposalActivitityById,
  UpdateProposalActivitityInput,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ProposalActivitityForm from 'src/components/ProposalActivitity/ProposalActivitityForm'

export const QUERY = gql`
  query EditProposalActivitityById($id: Int!) {
    proposalActivitity: proposalActivitity(id: $id) {
      id
      description
      proposalId
    }
  }
`
const UPDATE_PROPOSAL_ACTIVITITY_MUTATION = gql`
  mutation UpdateProposalActivitityMutation(
    $id: Int!
    $input: UpdateProposalActivitityInput!
  ) {
    updateProposalActivitity(id: $id, input: $input) {
      id
      description
      proposalId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  proposalActivitity,
}: CellSuccessProps<EditProposalActivitityById>) => {
  const [updateProposalActivitity, { loading, error }] = useMutation(
    UPDATE_PROPOSAL_ACTIVITITY_MUTATION,
    {
      onCompleted: () => {
        toast.success('ProposalActivitity updated')
        navigate(routes.proposalActivitities())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateProposalActivitityInput,
    id: EditProposalActivitityById['proposalActivitity']['id']
  ) => {
    updateProposalActivitity({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit ProposalActivitity {proposalActivitity?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <ProposalActivitityForm
          proposalActivitity={proposalActivitity}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
