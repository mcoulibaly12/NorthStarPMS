import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/CustomerPointOfContact/CustomerPointOfContactsCell'
import { truncate } from 'src/lib/formatters'

import type {
  DeleteCustomerPointOfContactMutationVariables,
  FindCustomerPointOfContacts,
} from 'types/graphql'

const DELETE_CUSTOMER_POINT_OF_CONTACT_MUTATION = gql`
  mutation DeleteCustomerPointOfContactMutation($id: Int!) {
    deleteCustomerPointOfContact(id: $id) {
      id
    }
  }
`

const CustomerPointOfContactsList = ({
  customerPointOfContacts,
}: FindCustomerPointOfContacts) => {
  const [deleteCustomerPointOfContact] = useMutation(
    DELETE_CUSTOMER_POINT_OF_CONTACT_MUTATION,
    {
      onCompleted: () => {
        toast.success('CustomerPointOfContact deleted')
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
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Email</th>
            <th>Phone number</th>
            <th>Customer id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {customerPointOfContacts.map((customerPointOfContact) => (
            <tr key={customerPointOfContact.id}>
              <td>{truncate(customerPointOfContact.id)}</td>
              <td>{truncate(customerPointOfContact.firstName)}</td>
              <td>{truncate(customerPointOfContact.lastName)}</td>
              <td>{truncate(customerPointOfContact.email)}</td>
              <td>{truncate(customerPointOfContact.phoneNumber)}</td>
              <td>{truncate(customerPointOfContact.customerId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.customerPointOfContact({
                      id: customerPointOfContact.id,
                    })}
                    title={
                      'Show customerPointOfContact ' +
                      customerPointOfContact.id +
                      ' detail'
                    }
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editCustomerPointOfContact({
                      id: customerPointOfContact.id,
                    })}
                    title={
                      'Edit customerPointOfContact ' + customerPointOfContact.id
                    }
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={
                      'Delete customerPointOfContact ' +
                      customerPointOfContact.id
                    }
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(customerPointOfContact.id)}
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

export default CustomerPointOfContactsList
