import EditProposalCell from 'src/components/Proposal/EditProposalCell'

type ProposalPageProps = {
  id: number
}

const EditProposalPage = ({ id }: ProposalPageProps) => {
  return <EditProposalCell id={id} />
}

export default EditProposalPage
