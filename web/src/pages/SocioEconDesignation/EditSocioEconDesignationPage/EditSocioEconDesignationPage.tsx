import EditSocioEconDesignationCell from 'src/components/SocioEconDesignation/EditSocioEconDesignationCell'

type SocioEconDesignationPageProps = {
  sedID: number
}

const EditSocioEconDesignationPage = ({
  sedID,
}: SocioEconDesignationPageProps) => {
  return <EditSocioEconDesignationCell sedID={sedID} />
}

export default EditSocioEconDesignationPage
