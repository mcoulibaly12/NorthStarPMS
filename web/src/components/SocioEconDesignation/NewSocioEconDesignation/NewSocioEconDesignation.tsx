import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import SocioEconDesignationForm from 'src/components/SocioEconDesignation/SocioEconDesignationForm'

import type { CreateSocioEconDesignationInput } from 'types/graphql'

const CREATE_SOCIO_ECON_DESIGNATION_MUTATION = gql`
  mutation CreateSocioEconDesignationMutation(
    $input: CreateSocioEconDesignationInput!
  ) {
    createSocioEconDesignation(input: $input) {
      sedID
    }
  }
`

const NewSocioEconDesignation = () => {
  const [createSocioEconDesignation, { loading, error }] = useMutation(
    CREATE_SOCIO_ECON_DESIGNATION_MUTATION,
    {
      onCompleted: () => {
        toast.success('SocioEconDesignation created')
        navigate(routes.socioEconDesignations())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateSocioEconDesignationInput) => {
    createSocioEconDesignation({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          New SocioEconDesignation
        </h2>
      </header>
      <div className="rw-segment-main">
        <SocioEconDesignationForm
          onSave={onSave}
          loading={loading}
          error={error}
        />
      </div>
    </div>
  )
}

export default NewSocioEconDesignation
