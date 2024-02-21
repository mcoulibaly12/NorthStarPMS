import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import {} from 'src/lib/formatters'

import type {
  DeleteSocioEconDesignationMutationVariables,
  FindSocioEconDesignationBySedID,
} from 'types/graphql'

const DELETE_SOCIO_ECON_DESIGNATION_MUTATION = gql`
  mutation DeleteSocioEconDesignationMutation($sedID: Int!) {
    deleteSocioEconDesignation(sedID: $sedID) {
      sedID
    }
  }
`

interface Props {
  socioEconDesignation: NonNullable<
    FindSocioEconDesignationBySedID['socioEconDesignation']
  >
}

const SocioEconDesignation = ({ socioEconDesignation }: Props) => {
  const [deleteSocioEconDesignation] = useMutation(
    DELETE_SOCIO_ECON_DESIGNATION_MUTATION,
    {
      onCompleted: () => {
        toast.success('SocioEconDesignation deleted')
        navigate(routes.socioEconDesignations())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onDeleteClick = (
    sedID: DeleteSocioEconDesignationMutationVariables['sedID']
  ) => {
    if (
      confirm(
        'Are you sure you want to delete socioEconDesignation ' + sedID + '?'
      )
    ) {
      deleteSocioEconDesignation({ variables: { sedID } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            SocioEconDesignation {socioEconDesignation.sedID} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Sed id</th>
              <td>{socioEconDesignation.sedID}</td>
            </tr>
            <tr>
              <th>Sed description</th>
              <td>{socioEconDesignation.sedDescription}</td>
            </tr>
            <tr>
              <th>Company id</th>
              <td>{socioEconDesignation.companyId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editSocioEconDesignation({
            sedID: socioEconDesignation.sedID,
          })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(socioEconDesignation.sedID)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default SocioEconDesignation
