import { Col, Container, Row } from 'react-bootstrap'

export function CustomersSection() {
  const sectionStyle = {
    border: '1px solid black',
    marginBottom: '10px',
    marginRight: '10px',
    minHeight: '80vh',
    padding: '0 15px',
  }

  return (
    <Container style={{ marginLeft: '1%' }} fluid>
      <Row>
        <Col sm={2} style={sectionStyle}>
          List of Customers
        </Col>
        <Col sm={9} style={sectionStyle}>
          Customer Info
        </Col>
      </Row>
    </Container>
  )
}
