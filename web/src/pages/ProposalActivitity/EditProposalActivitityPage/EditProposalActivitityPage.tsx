import EditProposalActivitityCell from 'src/components/ProposalActivitity/EditProposalActivitityCell'

type ProposalActivitityPageProps = {
  id: number
}

const EditProposalActivitityPage = ({ id }: ProposalActivitityPageProps) => {
  return <EditProposalActivitityCell id={id} />
}

export default EditProposalActivitityPage
