import EditPointOfContactCell from 'src/components/PointOfContact/EditPointOfContactCell'

type PointOfContactPageProps = {
  id: number
}

const EditPointOfContactPage = ({ id }: PointOfContactPageProps) => {
  return <EditPointOfContactCell id={id} />
}

export default EditPointOfContactPage
