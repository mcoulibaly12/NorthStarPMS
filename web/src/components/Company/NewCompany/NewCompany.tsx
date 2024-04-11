import type { CreateCompanyInput } from 'types/graphql'

import { navigate, routes, useParams } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import CompanyForm from 'src/components/Company/CompanyForm'

const CREATE_COMPANY_MUTATION = gql`
  mutation CreateCompanyMutation($input: CreateCompanyInput!) {
    createCompany(input: $input) {
      id
    }
  }
`

const UPDATE_USER_MUTATION = gql`
  mutation EditUserMutation($input: UpdateUserInput!, $id: Int!) {
    updateUser(id: $id, input: $input) {
      id
    }
  }
`

const NewCompany = () => {
  const { id } = useParams()
  const userId = parseInt(id, 10)

  const [createCompany, { loading, error }] = useMutation(
    CREATE_COMPANY_MUTATION,
    {
      onCompleted: () => {
        toast.success('Company created')
        navigate(routes.dashboard())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const [updateUser] = useMutation(UPDATE_USER_MUTATION)

  const onSave = async (input: CreateCompanyInput) => {
    const company = await createCompany({ variables: { input } })

    const companyId = company.data.createCompany.id

    // TODO: Figure out whats wrong with this mutation call
    updateUser({
      variables: { id: userId, input: { companyId, isAdmin: true } },
    })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Company</h2>
      </header>
      <div className="rw-segment-main">
        <CompanyForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewCompany
