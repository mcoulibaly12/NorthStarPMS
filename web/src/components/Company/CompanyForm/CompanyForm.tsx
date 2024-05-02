import type { EditCompanyById, UpdateCompanyInput } from 'types/graphql'

import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'
import type { RWGqlError } from '@redwoodjs/forms'

type FormCompany = NonNullable<EditCompanyById['company']>

interface CompanyFormProps {
  company?: EditCompanyById['company']
  onSave: (data: UpdateCompanyInput, id?: FormCompany['id']) => void
  error: RWGqlError
  loading: boolean
}
// TODO: Lets fine tune this
const CompanyForm = (props: CompanyFormProps) => {
  const onSubmit = (data: FormCompany) => {
    props.onSave(data, props?.company?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormCompany> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="companyName"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Company name
        </Label>

        <TextField
          name="companyName"
          defaultValue={props.company?.companyName}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="companyName" className="rw-field-error" />

        <Label
          name="addressOne"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Address one
        </Label>

        <TextField
          name="addressOne"
          defaultValue={props.company?.addressOne}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="addressOne" className="rw-field-error" />

        <Label
          name="addressTwo"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Address two
        </Label>

        <TextField
          name="addressTwo"
          defaultValue={props.company?.addressTwo}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="addressTwo" className="rw-field-error" />

        <Label
          name="city"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          City
        </Label>

        <TextField
          name="city"
          defaultValue={props.company?.city}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="city" className="rw-field-error" />

        <Label
          name="state"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          State
        </Label>

        <TextField
          name="state"
          defaultValue={props.company?.state}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="state" className="rw-field-error" />

        <Label
          name="zipCode"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Zip code
        </Label>

        <TextField
          name="zipCode"
          defaultValue={props.company?.zipCode}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="zipCode" className="rw-field-error" />

        <Label
          name="dunsNumber"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Duns number
        </Label>

        <NumberField
          name="dunsNumber"
          defaultValue={props.company?.dunsNumber}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="dunsNumber" className="rw-field-error" />

        <Label
          name="cageNumber"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Cage number
        </Label>

        <NumberField
          name="cageNumber"
          defaultValue={props.company?.cageNumber}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="cageNumber" className="rw-field-error" />

        <Label
          name="websiteUrl"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Website url
        </Label>

        <TextField
          name="websiteUrl"
          defaultValue={props.company?.websiteUrl}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="websiteUrl" className="rw-field-error" />

        <Label
          name="phoneNumber"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Phone number
        </Label>

        <TextField
          name="phoneNumber"
          defaultValue={props.company?.phoneNumber}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="phoneNumber" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default CompanyForm
