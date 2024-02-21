import ProposalActivitityCell from 'src/components/ProposalActivitity/ProposalActivitityCell'

type ProposalActivitityPageProps = {
  id: number
}

const ProposalActivitityPage = ({ id }: ProposalActivitityPageProps) => {
  return <ProposalActivitityCell id={id} />
}

export default ProposalActivitityPage
