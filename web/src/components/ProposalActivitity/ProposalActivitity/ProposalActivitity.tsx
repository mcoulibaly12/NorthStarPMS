import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import {} from 'src/lib/formatters'

import type {
  DeleteProposalActivitityMutationVariables,
  FindProposalActivitityById,
} from 'types/graphql'

const DELETE_PROPOSAL_ACTIVITITY_MUTATION = gql`
  mutation DeleteProposalActivitityMutation($id: Int!) {
    deleteProposalActivitity(id: $id) {
      id
    }
  }
`

interface Props {
  proposalActivitity: NonNullable<
    FindProposalActivitityById['proposalActivitity']
  >
}

const ProposalActivitity = ({ proposalActivitity }: Props) => {
  const [deleteProposalActivitity] = useMutation(
    DELETE_PROPOSAL_ACTIVITITY_MUTATION,
    {
      onCompleted: () => {
        toast.success('ProposalActivitity deleted')
        navigate(routes.proposalActivitities())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onDeleteClick = (
    id: DeleteProposalActivitityMutationVariables['id']
  ) => {
    if (
      confirm('Are you sure you want to delete proposalActivitity ' + id + '?')
    ) {
      deleteProposalActivitity({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            ProposalActivitity {proposalActivitity.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{proposalActivitity.id}</td>
            </tr>
            <tr>
              <th>Description</th>
              <td>{proposalActivitity.description}</td>
            </tr>
            <tr>
              <th>Proposal id</th>
              <td>{proposalActivitity.proposalId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editProposalActivitity({ id: proposalActivitity.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(proposalActivitity.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default ProposalActivitity
