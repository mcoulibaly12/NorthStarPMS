import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import {} from 'src/lib/formatters'

import type {
  DeleteCustomerMutationVariables,
  FindCustomerById,
} from 'types/graphql'

const DELETE_CUSTOMER_MUTATION = gql`
  mutation DeleteCustomerMutation($id: Int!) {
    deleteCustomer(id: $id) {
      id
    }
  }
`

interface Props {
  customer: NonNullable<FindCustomerById['customer']>
}

const Customer = ({ customer }: Props) => {
  const [deleteCustomer] = useMutation(DELETE_CUSTOMER_MUTATION, {
    onCompleted: () => {
      toast.success('Customer deleted')
      navigate(routes.customers())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteCustomerMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete customer ' + id + '?')) {
      deleteCustomer({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Customer {customer.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{customer.id}</td>
            </tr>
            <tr>
              <th>Title</th>
              <td>{customer.title}</td>
            </tr>
            <tr>
              <th>Address</th>
              <td>{customer.address}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{customer.email}</td>
            </tr>
            <tr>
              <th>Phone number</th>
              <td>{customer.phoneNumber}</td>
            </tr>
            <tr>
              <th>Csz</th>
              <td>{customer.csz}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editCustomer({ id: customer.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(customer.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Customer
