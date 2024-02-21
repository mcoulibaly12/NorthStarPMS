import EditCertificateCell from 'src/components/Certificate/EditCertificateCell'

type CertificatePageProps = {
  id: number
}

const EditCertificatePage = ({ id }: CertificatePageProps) => {
  return <EditCertificateCell id={id} />
}

export default EditCertificatePage
