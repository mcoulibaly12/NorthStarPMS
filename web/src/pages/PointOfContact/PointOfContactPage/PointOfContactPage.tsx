import PointOfContactCell from 'src/components/PointOfContact/PointOfContactCell'

type PointOfContactPageProps = {
  id: number
}

const PointOfContactPage = ({ id }: PointOfContactPageProps) => {
  return <PointOfContactCell id={id} />
}

export default PointOfContactPage
