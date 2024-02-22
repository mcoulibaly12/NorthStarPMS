import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Company/CompaniesCell'
import { truncate } from 'src/lib/formatters'

import type {
  DeleteCompanyMutationVariables,
  FindCompanies,
} from 'types/graphql'

const DELETE_COMPANY_MUTATION = gql`
  mutation DeleteCompanyMutation($id: Int!) {
    deleteCompany(id: $id) {
      id
    }
  }
`

const CompaniesList = ({ companies }: FindCompanies) => {
  const [deleteCompany] = useMutation(DELETE_COMPANY_MUTATION, {
    onCompleted: () => {
      toast.success('Company deleted')
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

  const onDeleteClick = (id: DeleteCompanyMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete company ' + id + '?')) {
      deleteCompany({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Company name</th>
            <th>Address one</th>
            <th>Address two</th>
            <th>City</th>
            <th>State</th>
            <th>Zip code</th>
            <th>Duns number</th>
            <th>Cage number</th>
            <th>Website url</th>
            <th>Phone number</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {companies.map((company) => (
            <tr key={company.id}>
              <td>{truncate(company.id)}</td>
              <td>{truncate(company.companyName)}</td>
              <td>{truncate(company.addressOne)}</td>
              <td>{truncate(company.addressTwo)}</td>
              <td>{truncate(company.city)}</td>
              <td>{truncate(company.state)}</td>
              <td>{truncate(company.zipCode)}</td>
              <td>{truncate(company.dunsNumber)}</td>
              <td>{truncate(company.cageNumber)}</td>
              <td>{truncate(company.websiteUrl)}</td>
              <td>{truncate(company.phoneNumber)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.company({ id: company.id })}
                    title={'Show company ' + company.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editCompany({ id: company.id })}
                    title={'Edit company ' + company.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete company ' + company.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(company.id)}
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

export default CompaniesList
