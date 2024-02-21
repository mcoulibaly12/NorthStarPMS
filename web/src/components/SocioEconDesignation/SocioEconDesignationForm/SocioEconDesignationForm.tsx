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
  EditSocioEconDesignationBySedID,
  UpdateSocioEconDesignationInput,
} from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'

type FormSocioEconDesignation = NonNullable<
  EditSocioEconDesignationBySedID['socioEconDesignation']
>

interface SocioEconDesignationFormProps {
  socioEconDesignation?: EditSocioEconDesignationBySedID['socioEconDesignation']
  onSave: (
    data: UpdateSocioEconDesignationInput,
    sedID?: FormSocioEconDesignation['sedID']
  ) => void
  error: RWGqlError
  loading: boolean
}

const SocioEconDesignationForm = (props: SocioEconDesignationFormProps) => {
  const onSubmit = (data: FormSocioEconDesignation) => {
    props.onSave(data, props?.socioEconDesignation?.sedID)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormSocioEconDesignation> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="sedDescription"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Sed description
        </Label>

        <TextField
          name="sedDescription"
          defaultValue={props.socioEconDesignation?.sedDescription}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="sedDescription" className="rw-field-error" />

        <Label
          name="companyId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Company id
        </Label>

        <NumberField
          name="companyId"
          defaultValue={props.socioEconDesignation?.companyId}
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

export default SocioEconDesignationForm
