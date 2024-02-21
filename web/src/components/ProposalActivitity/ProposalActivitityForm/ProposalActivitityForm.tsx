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
  EditProposalActivitityById,
  UpdateProposalActivitityInput,
} from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'

type FormProposalActivitity = NonNullable<
  EditProposalActivitityById['proposalActivitity']
>

interface ProposalActivitityFormProps {
  proposalActivitity?: EditProposalActivitityById['proposalActivitity']
  onSave: (
    data: UpdateProposalActivitityInput,
    id?: FormProposalActivitity['id']
  ) => void
  error: RWGqlError
  loading: boolean
}

const ProposalActivitityForm = (props: ProposalActivitityFormProps) => {
  const onSubmit = (data: FormProposalActivitity) => {
    props.onSave(data, props?.proposalActivitity?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormProposalActivitity> onSubmit={onSubmit} error={props.error}>
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
          defaultValue={props.proposalActivitity?.description}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="description" className="rw-field-error" />

        <Label
          name="proposalId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Proposal id
        </Label>

        <NumberField
          name="proposalId"
          defaultValue={props.proposalActivitity?.proposalId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="proposalId" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default ProposalActivitityForm
