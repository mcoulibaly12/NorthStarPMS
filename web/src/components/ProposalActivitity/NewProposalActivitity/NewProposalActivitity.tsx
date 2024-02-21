import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ProposalActivitityForm from 'src/components/ProposalActivitity/ProposalActivitityForm'

import type { CreateProposalActivitityInput } from 'types/graphql'

const CREATE_PROPOSAL_ACTIVITITY_MUTATION = gql`
  mutation CreateProposalActivitityMutation(
    $input: CreateProposalActivitityInput!
  ) {
    createProposalActivitity(input: $input) {
      id
    }
  }
`

const NewProposalActivitity = () => {
  const [createProposalActivitity, { loading, error }] = useMutation(
    CREATE_PROPOSAL_ACTIVITITY_MUTATION,
    {
      onCompleted: () => {
        toast.success('ProposalActivitity created')
        navigate(routes.proposalActivitities())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateProposalActivitityInput) => {
    createProposalActivitity({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          New ProposalActivitity
        </h2>
      </header>
      <div className="rw-segment-main">
        <ProposalActivitityForm
          onSave={onSave}
          loading={loading}
          error={error}
        />
      </div>
    </div>
  )
}

export default NewProposalActivitity
