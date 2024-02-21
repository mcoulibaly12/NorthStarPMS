import type { FindPointOfContacts } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import PointOfContacts from 'src/components/PointOfContact/PointOfContacts'

export const QUERY = gql`
  query FindPointOfContacts {
    pointOfContacts {
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

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No pointOfContacts yet. '}
      <Link to={routes.newPointOfContact()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  pointOfContacts,
}: CellSuccessProps<FindPointOfContacts>) => {
  return <PointOfContacts pointOfContacts={pointOfContacts} />
}
