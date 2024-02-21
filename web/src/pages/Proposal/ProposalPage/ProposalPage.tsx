import ProposalCell from 'src/components/Proposal/ProposalCell'

type ProposalPageProps = {
  id: number
}

const ProposalPage = ({ id }: ProposalPageProps) => {
  return <ProposalCell id={id} />
}

export default ProposalPage
