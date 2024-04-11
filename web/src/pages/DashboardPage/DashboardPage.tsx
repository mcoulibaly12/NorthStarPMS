import { Container, Row, Col, Button } from 'react-bootstrap'

import { navigate, routes, useParams } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'
import { useQuery } from '@redwoodjs/web'

import { CalendarSection } from './components/CalendarSection'
import { DataCallsSection } from './components/DataCallsSection'
import { ProposalsListSection } from './components/ProposalsListSection'
import { WramStatusSection } from './components/WramStatusSection'

/**
 * This is the dashboard page that the user will be navigated to when the log in
 * or sign up. If the user is not associated with a organization then they will be
 * shown a blank page with a button that allows them to create or join an org. Otherwise
 * they will be shown the full dashboard.
 * @returns Dashboard page
 */
const DashboardPage = () => {
  const sectionStyle = {
    border: '1px solid black',
    marginBottom: '10px',
    marginRight: '10px',
    minHeight: '300px',
    padding: '0 15px',
  }

  const QUERY = gql`
    query getUserById($id: Int!) {
      user(id: $id) {
        id
        email
        companyId
      }
    }
  `
  const { id } = useParams()
  const userId = parseInt(id, 10)

  const { data, loading, error } = useQuery(QUERY, {
    variables: { id: userId },
  })

  if (loading) return <p> Loading... </p>
  if (error) return <div> Error loading page </div>

  const companyId = data.user.companyId

  if (companyId) {
    return (
      <Container>
        <Metadata title="Dashboard" description="Dashboard page" />
        <Row sm={12} style={{ height: '100vh' }}>
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
  } else {
    // A button that will navigate them to a page to create an organization
    // Add some text that indicates that they are not associated with an
    // organization.
    return (
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: '100vh' }}
      >
        <div className="text-center">
          <p>You are currently not a part of any organizations</p>
          <p>
            Create an organization or ask your administrator to add you to their
            organization
          </p>
          <Button onClick={() => navigate(routes.newCompany({ id: userId }))}>
            Create an organization
          </Button>
        </div>
      </Container>
    )
  }
}

export default DashboardPage
