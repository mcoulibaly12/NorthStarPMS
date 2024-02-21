import type { EditCertificateById, UpdateCertificateInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import CertificateForm from 'src/components/Certificate/CertificateForm'

export const QUERY = gql`
  query EditCertificateById($id: Int!) {
    certificate: certificate(id: $id) {
      id
      description
      expirationDate
      companyId
    }
  }
`
const UPDATE_CERTIFICATE_MUTATION = gql`
  mutation UpdateCertificateMutation(
    $id: Int!
    $input: UpdateCertificateInput!
  ) {
    updateCertificate(id: $id, input: $input) {
      id
      description
      expirationDate
      companyId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  certificate,
}: CellSuccessProps<EditCertificateById>) => {
  const [updateCertificate, { loading, error }] = useMutation(
    UPDATE_CERTIFICATE_MUTATION,
    {
      onCompleted: () => {
        toast.success('Certificate updated')
        navigate(routes.certificates())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateCertificateInput,
    id: EditCertificateById['certificate']['id']
  ) => {
    updateCertificate({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Certificate {certificate?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <CertificateForm
          certificate={certificate}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
