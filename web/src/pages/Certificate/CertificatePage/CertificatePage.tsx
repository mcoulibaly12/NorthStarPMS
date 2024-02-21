import CertificateCell from 'src/components/Certificate/CertificateCell'

type CertificatePageProps = {
  id: number
}

const CertificatePage = ({ id }: CertificatePageProps) => {
  return <CertificateCell id={id} />
}

export default CertificatePage
