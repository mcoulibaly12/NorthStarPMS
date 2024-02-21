import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'

import type {
  EditPointOfContactById,
  UpdatePointOfContactInput,
} from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'

type FormPointOfContact = NonNullable<EditPointOfContactById['pointOfContact']>

interface PointOfContactFormProps {
  pointOfContact?: EditPointOfContactById['pointOfContact']
  onSave: (
    data: UpdatePointOfContactInput,
    id?: FormPointOfContact['id']
  ) => void
  error: RWGqlError
  loading: boolean
}

const PointOfContactForm = (props: PointOfContactFormProps) => {
  const onSubmit = (data: FormPointOfContact) => {
    props.onSave(data, props?.pointOfContact?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormPointOfContact> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="firstName"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          First name
        </Label>

        <TextField
          name="firstName"
          defaultValue={props.pointOfContact?.firstName}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="firstName" className="rw-field-error" />

        <Label
          name="lastName"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Last name
        </Label>

        <TextField
          name="lastName"
          defaultValue={props.pointOfContact?.lastName}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="lastName" className="rw-field-error" />

        <Label
          name="title"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Title
        </Label>

        <TextField
          name="title"
          defaultValue={props.pointOfContact?.title}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="title" className="rw-field-error" />

        <Label
          name="email"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Email
        </Label>

        <TextField
          name="email"
          defaultValue={props.pointOfContact?.email}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="email" className="rw-field-error" />

        <Label
          name="phoneNumber"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Phone number
        </Label>

        <TextField
          name="phoneNumber"
          defaultValue={props.pointOfContact?.phoneNumber}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="phoneNumber" className="rw-field-error" />

        <Label
          name="companyId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Company id
        </Label>

        <NumberField
          name="companyId"
          defaultValue={props.pointOfContact?.companyId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="companyId" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default PointOfContactForm
