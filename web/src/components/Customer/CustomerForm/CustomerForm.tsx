import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'

import type { EditCustomerById, UpdateCustomerInput } from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'

type FormCustomer = NonNullable<EditCustomerById['customer']>

interface CustomerFormProps {
  customer?: EditCustomerById['customer']
  onSave: (data: UpdateCustomerInput, id?: FormCustomer['id']) => void
  error: RWGqlError
  loading: boolean
}

const CustomerForm = (props: CustomerFormProps) => {
  const onSubmit = (data: FormCustomer) => {
    props.onSave(data, props?.customer?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormCustomer> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="title"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Title
        </Label>

        <TextField
          name="title"
          defaultValue={props.customer?.title}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="title" className="rw-field-error" />

        <Label
          name="address"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Address
        </Label>

        <TextField
          name="address"
          defaultValue={props.customer?.address}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="address" className="rw-field-error" />

        <Label
          name="email"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Email
        </Label>

        <TextField
          name="email"
          defaultValue={props.customer?.email}
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
          defaultValue={props.customer?.phoneNumber}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="phoneNumber" className="rw-field-error" />

        <Label
          name="csz"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Csz
        </Label>

        <TextField
          name="csz"
          defaultValue={props.customer?.csz}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="csz" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default CustomerForm
