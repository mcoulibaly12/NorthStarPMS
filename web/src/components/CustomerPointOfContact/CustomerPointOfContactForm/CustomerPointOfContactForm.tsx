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
  EditCustomerPointOfContactById,
  UpdateCustomerPointOfContactInput,
} from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'

type FormCustomerPointOfContact = NonNullable<
  EditCustomerPointOfContactById['customerPointOfContact']
>

interface CustomerPointOfContactFormProps {
  customerPointOfContact?: EditCustomerPointOfContactById['customerPointOfContact']
  onSave: (
    data: UpdateCustomerPointOfContactInput,
    id?: FormCustomerPointOfContact['id']
  ) => void
  error: RWGqlError
  loading: boolean
}

const CustomerPointOfContactForm = (props: CustomerPointOfContactFormProps) => {
  const onSubmit = (data: FormCustomerPointOfContact) => {
    props.onSave(data, props?.customerPointOfContact?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormCustomerPointOfContact> onSubmit={onSubmit} error={props.error}>
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
          defaultValue={props.customerPointOfContact?.firstName}
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
          defaultValue={props.customerPointOfContact?.lastName}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="lastName" className="rw-field-error" />

        <Label
          name="email"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Email
        </Label>

        <TextField
          name="email"
          defaultValue={props.customerPointOfContact?.email}
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
          defaultValue={props.customerPointOfContact?.phoneNumber}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="phoneNumber" className="rw-field-error" />

        <Label
          name="customerId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Customer id
        </Label>

        <NumberField
          name="customerId"
          defaultValue={props.customerPointOfContact?.customerId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="customerId" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default CustomerPointOfContactForm
