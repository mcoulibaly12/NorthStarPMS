import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/PointOfContact/PointOfContactsCell'
import { truncate } from 'src/lib/formatters'

import type {
  DeletePointOfContactMutationVariables,
  FindPointOfContacts,
} from 'types/graphql'

const DELETE_POINT_OF_CONTACT_MUTATION = gql`
  mutation DeletePointOfContactMutation($id: Int!) {
    deletePointOfContact(id: $id) {
      id
    }
  }
`

const PointOfContactsList = ({ pointOfContacts }: FindPointOfContacts) => {
  const [deletePointOfContact] = useMutation(DELETE_POINT_OF_CONTACT_MUTATION, {
    onCompleted: () => {
      toast.success('PointOfContact deleted')
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

  const onDeleteClick = (id: DeletePointOfContactMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete pointOfContact ' + id + '?')) {
      deletePointOfContact({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Title</th>
            <th>Email</th>
            <th>Phone number</th>
            <th>Company id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {pointOfContacts.map((pointOfContact) => (
            <tr key={pointOfContact.id}>
              <td>{truncate(pointOfContact.id)}</td>
              <td>{truncate(pointOfContact.firstName)}</td>
              <td>{truncate(pointOfContact.lastName)}</td>
              <td>{truncate(pointOfContact.title)}</td>
              <td>{truncate(pointOfContact.email)}</td>
              <td>{truncate(pointOfContact.phoneNumber)}</td>
              <td>{truncate(pointOfContact.companyId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.pointOfContact({ id: pointOfContact.id })}
                    title={
                      'Show pointOfContact ' + pointOfContact.id + ' detail'
                    }
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editPointOfContact({ id: pointOfContact.id })}
                    title={'Edit pointOfContact ' + pointOfContact.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete pointOfContact ' + pointOfContact.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(pointOfContact.id)}
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

export default PointOfContactsList
