import { Col, Container, Row } from 'react-bootstrap'

export function CriteriaSection() {
  const sectionStyle = {
    border: '1px solid black',
    marginBottom: '10px',
    marginRight: '10px',
    minHeight: '300px',
    padding: '0 15px',
  }

  return (
    <Container fluid>
      <Row>
        <Col style={sectionStyle}>Prop Activities for Schedule</Col>
        <Col style={sectionStyle}>Prop Directory Structure</Col>
      </Row>
      <Row>
        <Col style={sectionStyle}>Templates</Col>
        <Col style={sectionStyle}>Business Logic</Col>
      </Row>
    </Container>
  )
}
