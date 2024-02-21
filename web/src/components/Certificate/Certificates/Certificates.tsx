import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Certificate/CertificatesCell'
import { timeTag, truncate } from 'src/lib/formatters'

import type {
  DeleteCertificateMutationVariables,
  FindCertificates,
} from 'types/graphql'

const DELETE_CERTIFICATE_MUTATION = gql`
  mutation DeleteCertificateMutation($id: Int!) {
    deleteCertificate(id: $id) {
      id
    }
  }
`

const CertificatesList = ({ certificates }: FindCertificates) => {
  const [deleteCertificate] = useMutation(DELETE_CERTIFICATE_MUTATION, {
    onCompleted: () => {
      toast.success('Certificate deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id: DeleteCertificateMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete certificate ' + id + '?')) {
      deleteCertificate({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Description</th>
            <th>Expiration date</th>
            <th>Company id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {certificates.map((certificate) => (
            <tr key={certificate.id}>
              <td>{truncate(certificate.id)}</td>
              <td>{truncate(certificate.description)}</td>
              <td>{timeTag(certificate.expirationDate)}</td>
              <td>{truncate(certificate.companyId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.certificate({ id: certificate.id })}
                    title={'Show certificate ' + certificate.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editCertificate({ id: certificate.id })}
                    title={'Edit certificate ' + certificate.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete certificate ' + certificate.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(certificate.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default CertificatesList
