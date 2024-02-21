import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Proposal/ProposalsCell'
import { checkboxInputTag, timeTag, truncate } from 'src/lib/formatters'

import type {
  DeleteProposalMutationVariables,
  FindProposals,
} from 'types/graphql'

const DELETE_PROPOSAL_MUTATION = gql`
  mutation DeleteProposalMutation($id: Int!) {
    deleteProposal(id: $id) {
      id
    }
  }
`

const ProposalsList = ({ proposals }: FindProposals) => {
  const [deleteProposal] = useMutation(DELETE_PROPOSAL_MUTATION, {
    onCompleted: () => {
      toast.success('Proposal deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id: DeleteProposalMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete proposal ' + id + '?')) {
      deleteProposal({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Proposal code</th>
            <th>Department</th>
            <th>Agency</th>
            <th>Title</th>
            <th>Solicitation number</th>
            <th>Bid approval date</th>
            <th>Due date</th>
            <th>Questions due date</th>
            <th>Source of rfp</th>
            <th>Naics</th>
            <th>Set aside</th>
            <th>Contract type</th>
            <th>Competition</th>
            <th>Special skills</th>
            <th>Clearence requirements</th>
            <th>Custonmer id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {proposals.map((proposal) => (
            <tr key={proposal.id}>
              <td>{truncate(proposal.id)}</td>
              <td>{truncate(proposal.proposalCode)}</td>
              <td>{truncate(proposal.department)}</td>
              <td>{truncate(proposal.agency)}</td>
              <td>{truncate(proposal.title)}</td>
              <td>{truncate(proposal.solicitationNumber)}</td>
              <td>{timeTag(proposal.bidApprovalDate)}</td>
              <td>{timeTag(proposal.dueDate)}</td>
              <td>{timeTag(proposal.questionsDueDate)}</td>
              <td>{truncate(proposal.sourceOfRfp)}</td>
              <td>{truncate(proposal.naics)}</td>
              <td>{checkboxInputTag(proposal.setAside)}</td>
              <td>{truncate(proposal.contractType)}</td>
              <td>{truncate(proposal.competition)}</td>
              <td>{truncate(proposal.specialSkills)}</td>
              <td>{truncate(proposal.clearenceRequirements)}</td>
              <td>{truncate(proposal.custonmerId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.proposal({ id: proposal.id })}
                    title={'Show proposal ' + proposal.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editProposal({ id: proposal.id })}
                    title={'Edit proposal ' + proposal.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete proposal ' + proposal.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(proposal.id)}
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

export default ProposalsList
