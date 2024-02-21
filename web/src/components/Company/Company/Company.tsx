import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import {} from 'src/lib/formatters'

import type {
  DeleteCompanyMutationVariables,
  FindCompanyById,
} from 'types/graphql'

const DELETE_COMPANY_MUTATION = gql`
  mutation DeleteCompanyMutation($id: Int!) {
    deleteCompany(id: $id) {
      id
    }
  }
`

interface Props {
  company: NonNullable<FindCompanyById['company']>
}

const Company = ({ company }: Props) => {
  const [deleteCompany] = useMutation(DELETE_COMPANY_MUTATION, {
    onCompleted: () => {
      toast.success('Company deleted')
      navigate(routes.companies())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteCompanyMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete company ' + id + '?')) {
      deleteCompany({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Company {company.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{company.id}</td>
            </tr>
            <tr>
              <th>Company name</th>
              <td>{company.companyName}</td>
            </tr>
            <tr>
              <th>Address one</th>
              <td>{company.addressOne}</td>
            </tr>
            <tr>
              <th>Address two</th>
              <td>{company.addressTwo}</td>
            </tr>
            <tr>
              <th>City</th>
              <td>{company.city}</td>
            </tr>
            <tr>
              <th>State</th>
              <td>{company.state}</td>
            </tr>
            <tr>
              <th>Zip code</th>
              <td>{company.zipCode}</td>
            </tr>
            <tr>
              <th>Duns number</th>
              <td>{company.dunsNumber}</td>
            </tr>
            <tr>
              <th>Cage number</th>
              <td>{company.cageNumber}</td>
            </tr>
            <tr>
              <th>Website url</th>
              <td>{company.websiteUrl}</td>
            </tr>
            <tr>
              <th>Phone number</th>
              <td>{company.phoneNumber}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editCompany({ id: company.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(company.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Company
