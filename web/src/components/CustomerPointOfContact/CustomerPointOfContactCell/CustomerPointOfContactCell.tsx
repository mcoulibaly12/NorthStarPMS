import type { FindCustomerPointOfContactById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import CustomerPointOfContact from 'src/components/CustomerPointOfContact/CustomerPointOfContact'

export const QUERY = gql`
  query FindCustomerPointOfContactById($id: Int!) {
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

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>CustomerPointOfContact not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  customerPointOfContact,
}: CellSuccessProps<FindCustomerPointOfContactById>) => {
  return (
    <CustomerPointOfContact customerPointOfContact={customerPointOfContact} />
  )
}
