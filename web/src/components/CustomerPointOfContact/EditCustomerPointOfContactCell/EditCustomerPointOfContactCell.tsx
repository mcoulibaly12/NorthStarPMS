import type {
  EditCustomerPointOfContactById,
  UpdateCustomerPointOfContactInput,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import CustomerPointOfContactForm from 'src/components/CustomerPointOfContact/CustomerPointOfContactForm'

export const QUERY = gql`
  query EditCustomerPointOfContactById($id: Int!) {
    customerPointOfContact: customerPointOfContact(id: $id) {
      id
      firstName
      lastName
      email
      phoneNumber
      customerId
    }
  }
`
const UPDATE_CUSTOMER_POINT_OF_CONTACT_MUTATION = gql`
  mutation UpdateCustomerPointOfContactMutation(
    $id: Int!
    $input: UpdateCustomerPointOfContactInput!
  ) {
    updateCustomerPointOfContact(id: $id, input: $input) {
      id
      firstName
      lastName
      email
      phoneNumber
      customerId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  customerPointOfContact,
}: CellSuccessProps<EditCustomerPointOfContactById>) => {
  const [updateCustomerPointOfContact, { loading, error }] = useMutation(
    UPDATE_CUSTOMER_POINT_OF_CONTACT_MUTATION,
    {
      onCompleted: () => {
        toast.success('CustomerPointOfContact updated')
        navigate(routes.customerPointOfContacts())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateCustomerPointOfContactInput,
    id: EditCustomerPointOfContactById['customerPointOfContact']['id']
  ) => {
    updateCustomerPointOfContact({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit CustomerPointOfContact {customerPointOfContact?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <CustomerPointOfContactForm
          customerPointOfContact={customerPointOfContact}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
