import CustomerPointOfContactCell from 'src/components/CustomerPointOfContact/CustomerPointOfContactCell'

type CustomerPointOfContactPageProps = {
  id: number
}

const CustomerPointOfContactPage = ({
  id,
}: CustomerPointOfContactPageProps) => {
  return <CustomerPointOfContactCell id={id} />
}

export default CustomerPointOfContactPage
