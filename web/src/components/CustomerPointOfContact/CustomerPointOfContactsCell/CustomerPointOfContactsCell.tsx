import type { FindCustomerPointOfContacts } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import CustomerPointOfContacts from 'src/components/CustomerPointOfContact/CustomerPointOfContacts'

export const QUERY = gql`
  query FindCustomerPointOfContacts {
    customerPointOfContacts {
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

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No customerPointOfContacts yet. '}
      <Link to={routes.newCustomerPointOfContact()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  customerPointOfContacts,
}: CellSuccessProps<FindCustomerPointOfContacts>) => {
  return (
    <CustomerPointOfContacts
      customerPointOfContacts={customerPointOfContacts}
    />
  )
}
