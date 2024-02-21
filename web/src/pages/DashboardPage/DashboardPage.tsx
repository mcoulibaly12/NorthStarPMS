import { Container, Row, Col } from 'react-bootstrap'

import { Metadata } from '@redwoodjs/web'

import { CalendarSection } from './components/CalendarSection'
import { DataCallsSection } from './components/DataCallsSection'
import { ProposalsListSection } from './components/ProposalsListSection'
import { WramStatusSection } from './components/WramStatusSection'

const DashboardPage = () => {
  const sectionStyle = {
    border: '1px solid black',
    marginBottom: '10px',
    marginRight: '10px',
    minHeight: '300px',
    padding: '0 15px',
  }

  return (
    <Container>
      <Metadata title="Dashboard" description="Dashboard page" />

      <Row sm={12} style={{ height: '100vh' }}>
        {/* Main Content Sections */}
        <Col>
          <Row>
            <Col md={5} style={sectionStyle} className="pe-md-2">
              <CalendarSection />
            </Col>
            <Col md={5} style={sectionStyle} className="ps-md-2">
              <ProposalsListSection />
            </Col>
          </Row>
          <Row>
            <Col md={5} style={sectionStyle} className="pe-md-2">
              <DataCallsSection />
            </Col>
            <Col md={5} style={sectionStyle} className="ps-md-2">
              <WramStatusSection />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default DashboardPage
