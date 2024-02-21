import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import {} from 'src/lib/formatters'

import type {
  DeletePointOfContactMutationVariables,
  FindPointOfContactById,
} from 'types/graphql'

const DELETE_POINT_OF_CONTACT_MUTATION = gql`
  mutation DeletePointOfContactMutation($id: Int!) {
    deletePointOfContact(id: $id) {
      id
    }
  }
`

interface Props {
  pointOfContact: NonNullable<FindPointOfContactById['pointOfContact']>
}

const PointOfContact = ({ pointOfContact }: Props) => {
  const [deletePointOfContact] = useMutation(DELETE_POINT_OF_CONTACT_MUTATION, {
    onCompleted: () => {
      toast.success('PointOfContact deleted')
      navigate(routes.pointOfContacts())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeletePointOfContactMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete pointOfContact ' + id + '?')) {
      deletePointOfContact({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            PointOfContact {pointOfContact.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{pointOfContact.id}</td>
            </tr>
            <tr>
              <th>First name</th>
              <td>{pointOfContact.firstName}</td>
            </tr>
            <tr>
              <th>Last name</th>
              <td>{pointOfContact.lastName}</td>
            </tr>
            <tr>
              <th>Title</th>
              <td>{pointOfContact.title}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{pointOfContact.email}</td>
            </tr>
            <tr>
              <th>Phone number</th>
              <td>{pointOfContact.phoneNumber}</td>
            </tr>
            <tr>
              <th>Company id</th>
              <td>{pointOfContact.companyId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editPointOfContact({ id: pointOfContact.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(pointOfContact.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default PointOfContact
