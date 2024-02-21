import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ProposalForm from 'src/components/Proposal/ProposalForm'

import type { CreateProposalInput } from 'types/graphql'

const CREATE_PROPOSAL_MUTATION = gql`
  mutation CreateProposalMutation($input: CreateProposalInput!) {
    createProposal(input: $input) {
      id
    }
  }
`

const NewProposal = () => {
  const [createProposal, { loading, error }] = useMutation(
    CREATE_PROPOSAL_MUTATION,
    {
      onCompleted: () => {
        toast.success('Proposal created')
        navigate(routes.proposals())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateProposalInput) => {
    createProposal({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Proposal</h2>
      </header>
      <div className="rw-segment-main">
        <ProposalForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewProposal
