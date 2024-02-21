import type {
  EditPointOfContactById,
  UpdatePointOfContactInput,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import PointOfContactForm from 'src/components/PointOfContact/PointOfContactForm'

export const QUERY = gql`
  query EditPointOfContactById($id: Int!) {
    pointOfContact: pointOfContact(id: $id) {
      id
      firstName
      lastName
      title
      email
      phoneNumber
      companyId
    }
  }
`
const UPDATE_POINT_OF_CONTACT_MUTATION = gql`
  mutation UpdatePointOfContactMutation(
    $id: Int!
    $input: UpdatePointOfContactInput!
  ) {
    updatePointOfContact(id: $id, input: $input) {
      id
      firstName
      lastName
      title
      email
      phoneNumber
      companyId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  pointOfContact,
}: CellSuccessProps<EditPointOfContactById>) => {
  const [updatePointOfContact, { loading, error }] = useMutation(
    UPDATE_POINT_OF_CONTACT_MUTATION,
    {
      onCompleted: () => {
        toast.success('PointOfContact updated')
        navigate(routes.pointOfContacts())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdatePointOfContactInput,
    id: EditPointOfContactById['pointOfContact']['id']
  ) => {
    updatePointOfContact({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit PointOfContact {pointOfContact?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <PointOfContactForm
          pointOfContact={pointOfContact}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
