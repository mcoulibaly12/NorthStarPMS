import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  DatetimeLocalField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'

import type { EditCertificateById, UpdateCertificateInput } from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}

type FormCertificate = NonNullable<EditCertificateById['certificate']>

interface CertificateFormProps {
  certificate?: EditCertificateById['certificate']
  onSave: (data: UpdateCertificateInput, id?: FormCertificate['id']) => void
  error: RWGqlError
  loading: boolean
}

const CertificateForm = (props: CertificateFormProps) => {
  const onSubmit = (data: FormCertificate) => {
    props.onSave(data, props?.certificate?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormCertificate> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="description"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Description
        </Label>

        <TextField
          name="description"
          defaultValue={props.certificate?.description}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="description" className="rw-field-error" />

        <Label
          name="expirationDate"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Expiration date
        </Label>

        <DatetimeLocalField
          name="expirationDate"
          defaultValue={formatDatetime(props.certificate?.expirationDate)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="expirationDate" className="rw-field-error" />

        <Label
          name="companyId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Company id
        </Label>

        <NumberField
          name="companyId"
          defaultValue={props.certificate?.companyId}
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

export default CertificateForm
