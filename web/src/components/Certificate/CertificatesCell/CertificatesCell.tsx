import type { FindCertificates } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Certificates from 'src/components/Certificate/Certificates'

export const QUERY = gql`
  query FindCertificates {
    certificates {
      id
      description
      expirationDate
      companyId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No certificates yet. '}
      <Link to={routes.newCertificate()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  certificates,
}: CellSuccessProps<FindCertificates>) => {
  return <Certificates certificates={certificates} />
}
