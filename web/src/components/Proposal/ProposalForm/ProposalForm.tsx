import {
  Form,
  FormError,
  FieldError,
  Label,
  NumberField,
  TextField,
  DatetimeLocalField,
  CheckboxField,
  Submit,
} from '@redwoodjs/forms'

import type { EditProposalById, UpdateProposalInput } from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}

type FormProposal = NonNullable<EditProposalById['proposal']>

interface ProposalFormProps {
  proposal?: EditProposalById['proposal']
  onSave: (data: UpdateProposalInput, id?: FormProposal['id']) => void
  error: RWGqlError
  loading: boolean
}

const ProposalForm = (props: ProposalFormProps) => {
  const onSubmit = (data: FormProposal) => {
    props.onSave(data, props?.proposal?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormProposal> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="proposalCode"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Proposal code
        </Label>

        <NumberField
          name="proposalCode"
          defaultValue={props.proposal?.proposalCode}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="proposalCode" className="rw-field-error" />

        <Label
          name="department"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Department
        </Label>

        <TextField
          name="department"
          defaultValue={props.proposal?.department}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="department" className="rw-field-error" />

        <Label
          name="agency"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Agency
        </Label>

        <TextField
          name="agency"
          defaultValue={props.proposal?.agency}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="agency" className="rw-field-error" />

        <Label
          name="title"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Title
        </Label>

        <TextField
          name="title"
          defaultValue={props.proposal?.title}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="title" className="rw-field-error" />

        <Label
          name="solicitationNumber"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Solicitation number
        </Label>

        <NumberField
          name="solicitationNumber"
          defaultValue={props.proposal?.solicitationNumber}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="solicitationNumber" className="rw-field-error" />

        <Label
          name="bidApprovalDate"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Bid approval date
        </Label>

        <DatetimeLocalField
          name="bidApprovalDate"
          defaultValue={formatDatetime(props.proposal?.bidApprovalDate)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="bidApprovalDate" className="rw-field-error" />

        <Label
          name="dueDate"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Due date
        </Label>

        <DatetimeLocalField
          name="dueDate"
          defaultValue={formatDatetime(props.proposal?.dueDate)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="dueDate" className="rw-field-error" />

        <Label
          name="questionsDueDate"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Questions due date
        </Label>

        <DatetimeLocalField
          name="questionsDueDate"
          defaultValue={formatDatetime(props.proposal?.questionsDueDate)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="questionsDueDate" className="rw-field-error" />

        <Label
          name="sourceOfRfp"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Source of rfp
        </Label>

        <TextField
          name="sourceOfRfp"
          defaultValue={props.proposal?.sourceOfRfp}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="sourceOfRfp" className="rw-field-error" />

        <Label
          name="naics"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Naics
        </Label>

        <TextField
          name="naics"
          defaultValue={props.proposal?.naics}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="naics" className="rw-field-error" />

        <Label
          name="setAside"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Set aside
        </Label>

        <CheckboxField
          name="setAside"
          defaultChecked={props.proposal?.setAside}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="setAside" className="rw-field-error" />

        <Label
          name="contractType"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Contract type
        </Label>

        <TextField
          name="contractType"
          defaultValue={props.proposal?.contractType}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="contractType" className="rw-field-error" />

        <Label
          name="competition"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Competition
        </Label>

        <TextField
          name="competition"
          defaultValue={props.proposal?.competition}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="competition" className="rw-field-error" />

        <Label
          name="specialSkills"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Special skills
        </Label>

        <TextField
          name="specialSkills"
          defaultValue={props.proposal?.specialSkills}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="specialSkills" className="rw-field-error" />

        <Label
          name="clearenceRequirements"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Clearence requirements
        </Label>

        <TextField
          name="clearenceRequirements"
          defaultValue={props.proposal?.clearenceRequirements}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="clearenceRequirements" className="rw-field-error" />

        <Label
          name="custonmerId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Custonmer id
        </Label>

        <NumberField
          name="custonmerId"
          defaultValue={props.proposal?.custonmerId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="custonmerId" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default ProposalForm
