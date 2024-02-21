import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/ProposalActivitity/ProposalActivititiesCell'
import { truncate } from 'src/lib/formatters'

import type {
  DeleteProposalActivitityMutationVariables,
  FindProposalActivitities,
} from 'types/graphql'

const DELETE_PROPOSAL_ACTIVITITY_MUTATION = gql`
  mutation DeleteProposalActivitityMutation($id: Int!) {
    deleteProposalActivitity(id: $id) {
      id
    }
  }
`

const ProposalActivititiesList = ({
  proposalActivitities,
}: FindProposalActivitities) => {
  const [deleteProposalActivitity] = useMutation(
    DELETE_PROPOSAL_ACTIVITITY_MUTATION,
    {
      onCompleted: () => {
        toast.success('ProposalActivitity deleted')
      },
      onError: (error) => {
        toast.error(error.message)
      },
      // This refetches the query on the list page. Read more about other ways to
      // update the cache over here:
      // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
      refetchQueries: [{ query: QUERY }],
      awaitRefetchQueries: true,
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
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Description</th>
            <th>Proposal id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {proposalActivitities.map((proposalActivitity) => (
            <tr key={proposalActivitity.id}>
              <td>{truncate(proposalActivitity.id)}</td>
              <td>{truncate(proposalActivitity.description)}</td>
              <td>{truncate(proposalActivitity.proposalId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.proposalActivitity({
                      id: proposalActivitity.id,
                    })}
                    title={
                      'Show proposalActivitity ' +
                      proposalActivitity.id +
                      ' detail'
                    }
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editProposalActivitity({
                      id: proposalActivitity.id,
                    })}
                    title={'Edit proposalActivitity ' + proposalActivitity.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete proposalActivitity ' + proposalActivitity.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(proposalActivitity.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ProposalActivititiesList
