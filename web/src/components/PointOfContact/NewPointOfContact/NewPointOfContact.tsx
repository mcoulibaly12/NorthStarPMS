import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import PointOfContactForm from 'src/components/PointOfContact/PointOfContactForm'

import type { CreatePointOfContactInput } from 'types/graphql'

const CREATE_POINT_OF_CONTACT_MUTATION = gql`
  mutation CreatePointOfContactMutation($input: CreatePointOfContactInput!) {
    createPointOfContact(input: $input) {
      id
    }
  }
`

const NewPointOfContact = () => {
  const [createPointOfContact, { loading, error }] = useMutation(
    CREATE_POINT_OF_CONTACT_MUTATION,
    {
      onCompleted: () => {
        toast.success('PointOfContact created')
        navigate(routes.pointOfContacts())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreatePointOfContactInput) => {
    createPointOfContact({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New PointOfContact</h2>
      </header>
      <div className="rw-segment-main">
        <PointOfContactForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewPointOfContact
