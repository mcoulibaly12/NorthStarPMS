import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import CustomerPointOfContactForm from 'src/components/CustomerPointOfContact/CustomerPointOfContactForm'

import type { CreateCustomerPointOfContactInput } from 'types/graphql'

const CREATE_CUSTOMER_POINT_OF_CONTACT_MUTATION = gql`
  mutation CreateCustomerPointOfContactMutation(
    $input: CreateCustomerPointOfContactInput!
  ) {
    createCustomerPointOfContact(input: $input) {
      id
    }
  }
`

const NewCustomerPointOfContact = () => {
  const [createCustomerPointOfContact, { loading, error }] = useMutation(
    CREATE_CUSTOMER_POINT_OF_CONTACT_MUTATION,
    {
      onCompleted: () => {
        toast.success('CustomerPointOfContact created')
        navigate(routes.customerPointOfContacts())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateCustomerPointOfContactInput) => {
    createCustomerPointOfContact({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          New CustomerPointOfContact
        </h2>
      </header>
      <div className="rw-segment-main">
        <CustomerPointOfContactForm
          onSave={onSave}
          loading={loading}
          error={error}
        />
      </div>
    </div>
  )
}

export default NewCustomerPointOfContact
