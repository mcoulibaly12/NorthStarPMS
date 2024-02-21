import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import CertificateForm from 'src/components/Certificate/CertificateForm'

import type { CreateCertificateInput } from 'types/graphql'

const CREATE_CERTIFICATE_MUTATION = gql`
  mutation CreateCertificateMutation($input: CreateCertificateInput!) {
    createCertificate(input: $input) {
      id
    }
  }
`

const NewCertificate = () => {
  const [createCertificate, { loading, error }] = useMutation(
    CREATE_CERTIFICATE_MUTATION,
    {
      onCompleted: () => {
        toast.success('Certificate created')
        navigate(routes.certificates())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateCertificateInput) => {
    createCertificate({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Certificate</h2>
      </header>
      <div className="rw-segment-main">
        <CertificateForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewCertificate
