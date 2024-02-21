import type { FindPointOfContactById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import PointOfContact from 'src/components/PointOfContact/PointOfContact'

export const QUERY = gql`
  query FindPointOfContactById($id: Int!) {
    pointOfContact: pointOfContact(id: $id) {
      id
      firstName
      lastName
      title
      email
      phoneNumber
      companyId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>PointOfContact not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  pointOfContact,
}: CellSuccessProps<FindPointOfContactById>) => {
  return <PointOfContact pointOfContact={pointOfContact} />
}
