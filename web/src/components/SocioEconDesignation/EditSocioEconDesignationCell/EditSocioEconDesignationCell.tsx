import type {
  EditSocioEconDesignationBySedID,
  UpdateSocioEconDesignationInput,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import SocioEconDesignationForm from 'src/components/SocioEconDesignation/SocioEconDesignationForm'

export const QUERY = gql`
  query EditSocioEconDesignationBySedID($sedID: Int!) {
    socioEconDesignation: socioEconDesignation(sedID: $sedID) {
      sedID
      sedDescription
      companyId
    }
  }
`
const UPDATE_SOCIO_ECON_DESIGNATION_MUTATION = gql`
  mutation UpdateSocioEconDesignationMutation(
    $sedID: Int!
    $input: UpdateSocioEconDesignationInput!
  ) {
    updateSocioEconDesignation(sedID: $sedID, input: $input) {
      sedID
      sedDescription
      companyId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  socioEconDesignation,
}: CellSuccessProps<EditSocioEconDesignationBySedID>) => {
  const [updateSocioEconDesignation, { loading, error }] = useMutation(
    UPDATE_SOCIO_ECON_DESIGNATION_MUTATION,
    {
      onCompleted: () => {
        toast.success('SocioEconDesignation updated')
        navigate(routes.socioEconDesignations())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateSocioEconDesignationInput,
    id: EditSocioEconDesignationBySedID['socioEconDesignation']['id']
  ) => {
    updateSocioEconDesignation({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit SocioEconDesignation {socioEconDesignation?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <SocioEconDesignationForm
          socioEconDesignation={socioEconDesignation}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
