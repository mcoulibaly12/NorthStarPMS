import type { EditProposalById, UpdateProposalInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ProposalForm from 'src/components/Proposal/ProposalForm'

export const QUERY = gql`
  query EditProposalById($id: Int!) {
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
const UPDATE_PROPOSAL_MUTATION = gql`
  mutation UpdateProposalMutation($id: Int!, $input: UpdateProposalInput!) {
    updateProposal(id: $id, input: $input) {
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

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ proposal }: CellSuccessProps<EditProposalById>) => {
  const [updateProposal, { loading, error }] = useMutation(
    UPDATE_PROPOSAL_MUTATION,
    {
      onCompleted: () => {
        toast.success('Proposal updated')
        navigate(routes.proposals())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateProposalInput,
    id: EditProposalById['proposal']['id']
  ) => {
    updateProposal({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Proposal {proposal?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <ProposalForm
          proposal={proposal}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
