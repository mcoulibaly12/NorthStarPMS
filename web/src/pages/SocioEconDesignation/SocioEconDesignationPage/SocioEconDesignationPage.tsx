import SocioEconDesignationCell from 'src/components/SocioEconDesignation/SocioEconDesignationCell'

type SocioEconDesignationPageProps = {
  sedID: number
}

const SocioEconDesignationPage = ({ sedID }: SocioEconDesignationPageProps) => {
  return <SocioEconDesignationCell sedID={sedID} />
}

export default SocioEconDesignationPage
