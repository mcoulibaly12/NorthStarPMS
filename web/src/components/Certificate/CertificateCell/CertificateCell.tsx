import type { FindCertificateById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Certificate from 'src/components/Certificate/Certificate'

export const QUERY = gql`
  query FindCertificateById($id: Int!) {
    certificate: certificate(id: $id) {
      id
      description
      expirationDate
      companyId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Certificate not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  certificate,
}: CellSuccessProps<FindCertificateById>) => {
  return <Certificate certificate={certificate} />
}
