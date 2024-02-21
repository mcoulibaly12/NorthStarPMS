import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { checkboxInputTag, timeTag } from 'src/lib/formatters'

import type {
  DeleteProposalMutationVariables,
  FindProposalById,
} from 'types/graphql'

const DELETE_PROPOSAL_MUTATION = gql`
  mutation DeleteProposalMutation($id: Int!) {
    deleteProposal(id: $id) {
      id
    }
  }
`

interface Props {
  proposal: NonNullable<FindProposalById['proposal']>
}

const Proposal = ({ proposal }: Props) => {
  const [deleteProposal] = useMutation(DELETE_PROPOSAL_MUTATION, {
    onCompleted: () => {
      toast.success('Proposal deleted')
      navigate(routes.proposals())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteProposalMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete proposal ' + id + '?')) {
      deleteProposal({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Proposal {proposal.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{proposal.id}</td>
            </tr>
            <tr>
              <th>Proposal code</th>
              <td>{proposal.proposalCode}</td>
            </tr>
            <tr>
              <th>Department</th>
              <td>{proposal.department}</td>
            </tr>
            <tr>
              <th>Agency</th>
              <td>{proposal.agency}</td>
            </tr>
            <tr>
              <th>Title</th>
              <td>{proposal.title}</td>
            </tr>
            <tr>
              <th>Solicitation number</th>
              <td>{proposal.solicitationNumber}</td>
            </tr>
            <tr>
              <th>Bid approval date</th>
              <td>{timeTag(proposal.bidApprovalDate)}</td>
            </tr>
            <tr>
              <th>Due date</th>
              <td>{timeTag(proposal.dueDate)}</td>
            </tr>
            <tr>
              <th>Questions due date</th>
              <td>{timeTag(proposal.questionsDueDate)}</td>
            </tr>
            <tr>
              <th>Source of rfp</th>
              <td>{proposal.sourceOfRfp}</td>
            </tr>
            <tr>
              <th>Naics</th>
              <td>{proposal.naics}</td>
            </tr>
            <tr>
              <th>Set aside</th>
              <td>{checkboxInputTag(proposal.setAside)}</td>
            </tr>
            <tr>
              <th>Contract type</th>
              <td>{proposal.contractType}</td>
            </tr>
            <tr>
              <th>Competition</th>
              <td>{proposal.competition}</td>
            </tr>
            <tr>
              <th>Special skills</th>
              <td>{proposal.specialSkills}</td>
            </tr>
            <tr>
              <th>Clearence requirements</th>
              <td>{proposal.clearenceRequirements}</td>
            </tr>
            <tr>
              <th>Custonmer id</th>
              <td>{proposal.custonmerId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editProposal({ id: proposal.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(proposal.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Proposal
