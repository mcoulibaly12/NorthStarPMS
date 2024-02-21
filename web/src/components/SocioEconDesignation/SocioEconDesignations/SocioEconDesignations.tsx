import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/SocioEconDesignation/SocioEconDesignationsCell'
import { truncate } from 'src/lib/formatters'

import type {
  DeleteSocioEconDesignationMutationVariables,
  FindSocioEconDesignations,
} from 'types/graphql'

const DELETE_SOCIO_ECON_DESIGNATION_MUTATION = gql`
  mutation DeleteSocioEconDesignationMutation($sedID: Int!) {
    deleteSocioEconDesignation(sedID: $sedID) {
      sedID
    }
  }
`

const SocioEconDesignationsList = ({
  socioEconDesignations,
}: FindSocioEconDesignations) => {
  const [deleteSocioEconDesignation] = useMutation(
    DELETE_SOCIO_ECON_DESIGNATION_MUTATION,
    {
      onCompleted: () => {
        toast.success('SocioEconDesignation deleted')
      },
      onError: (error) => {
        toast.error(error.message)
      },
      // This refetches the query on the list page. Read more about other ways to
      // update the cache over here:
      // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
      refetchQueries: [{ query: QUERY }],
      awaitRefetchQueries: true,
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
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Sed id</th>
            <th>Sed description</th>
            <th>Company id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {socioEconDesignations.map((socioEconDesignation) => (
            <tr key={socioEconDesignation.sedID}>
              <td>{truncate(socioEconDesignation.sedID)}</td>
              <td>{truncate(socioEconDesignation.sedDescription)}</td>
              <td>{truncate(socioEconDesignation.companyId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.socioEconDesignation({
                      sedID: socioEconDesignation.sedID,
                    })}
                    title={
                      'Show socioEconDesignation ' +
                      socioEconDesignation.sedID +
                      ' detail'
                    }
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editSocioEconDesignation({
                      sedID: socioEconDesignation.sedID,
                    })}
                    title={
                      'Edit socioEconDesignation ' + socioEconDesignation.sedID
                    }
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={
                      'Delete socioEconDesignation ' +
                      socioEconDesignation.sedID
                    }
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(socioEconDesignation.sedID)}
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

export default SocioEconDesignationsList
