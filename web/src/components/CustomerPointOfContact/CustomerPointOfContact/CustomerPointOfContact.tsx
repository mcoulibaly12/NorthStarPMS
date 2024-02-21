import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import {} from 'src/lib/formatters'

import type {
  DeleteCustomerPointOfContactMutationVariables,
  FindCustomerPointOfContactById,
} from 'types/graphql'

const DELETE_CUSTOMER_POINT_OF_CONTACT_MUTATION = gql`
  mutation DeleteCustomerPointOfContactMutation($id: Int!) {
    deleteCustomerPointOfContact(id: $id) {
      id
    }
  }
`

interface Props {
  customerPointOfContact: NonNullable<
    FindCustomerPointOfContactById['customerPointOfContact']
  >
}

const CustomerPointOfContact = ({ customerPointOfContact }: Props) => {
  const [deleteCustomerPointOfContact] = useMutation(
    DELETE_CUSTOMER_POINT_OF_CONTACT_MUTATION,
    {
      onCompleted: () => {
        toast.success('CustomerPointOfContact deleted')
        navigate(routes.customerPointOfContacts())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onDeleteClick = (
    id: DeleteCustomerPointOfContactMutationVariables['id']
  ) => {
    if (
      confirm(
        'Are you sure you want to delete customerPointOfContact ' + id + '?'
      )
    ) {
      deleteCustomerPointOfContact({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            CustomerPointOfContact {customerPointOfContact.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{customerPointOfContact.id}</td>
            </tr>
            <tr>
              <th>First name</th>
              <td>{customerPointOfContact.firstName}</td>
            </tr>
            <tr>
              <th>Last name</th>
              <td>{customerPointOfContact.lastName}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{customerPointOfContact.email}</td>
            </tr>
            <tr>
              <th>Phone number</th>
              <td>{customerPointOfContact.phoneNumber}</td>
            </tr>
            <tr>
              <th>Customer id</th>
              <td>{customerPointOfContact.customerId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editCustomerPointOfContact({
            id: customerPointOfContact.id,
          })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(customerPointOfContact.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default CustomerPointOfContact
