import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag } from 'src/lib/formatters'

import type {
  DeleteCertificateMutationVariables,
  FindCertificateById,
} from 'types/graphql'

const DELETE_CERTIFICATE_MUTATION = gql`
  mutation DeleteCertificateMutation($id: Int!) {
    deleteCertificate(id: $id) {
      id
    }
  }
`

interface Props {
  certificate: NonNullable<FindCertificateById['certificate']>
}

const Certificate = ({ certificate }: Props) => {
  const [deleteCertificate] = useMutation(DELETE_CERTIFICATE_MUTATION, {
    onCompleted: () => {
      toast.success('Certificate deleted')
      navigate(routes.certificates())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteCertificateMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete certificate ' + id + '?')) {
      deleteCertificate({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Certificate {certificate.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{certificate.id}</td>
            </tr>
            <tr>
              <th>Description</th>
              <td>{certificate.description}</td>
            </tr>
            <tr>
              <th>Expiration date</th>
              <td>{timeTag(certificate.expirationDate)}</td>
            </tr>
            <tr>
              <th>Company id</th>
              <td>{certificate.companyId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editCertificate({ id: certificate.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(certificate.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Certificate
