import { Col, Container, Row } from 'react-bootstrap'

export function CompanySection() {
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
        <Col style={sectionStyle}>Company profile</Col>
        <Col style={sectionStyle}>Company Certifications</Col>
      </Row>
      <Row>
        <Col style={sectionStyle}>Company SocioEcon Designations</Col>
        <Col style={sectionStyle}>Company POC</Col>
      </Row>
    </Container>
  )
}
