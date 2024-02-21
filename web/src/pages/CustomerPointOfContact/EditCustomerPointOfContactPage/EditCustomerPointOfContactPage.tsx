import EditCustomerPointOfContactCell from 'src/components/CustomerPointOfContact/EditCustomerPointOfContactCell'

type CustomerPointOfContactPageProps = {
  id: number
}

const EditCustomerPointOfContactPage = ({
  id,
}: CustomerPointOfContactPageProps) => {
  return <EditCustomerPointOfContactCell id={id} />
}

export default EditCustomerPointOfContactPage
