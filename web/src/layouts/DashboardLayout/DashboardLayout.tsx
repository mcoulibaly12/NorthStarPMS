import { Col, Container, Row } from 'react-bootstrap'

import { Header } from '../../components/rootLayout/Header'
import { SideMenu } from '../../components/rootLayout/SideMenu'

type DashboardLayoutProps = {
  children?: React.ReactNode
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <Container
      className="App"
      style={{
        height: '100vh',
        paddingLeft: 0,
        paddingRight: 0,
        paddingBottom: 0,
      }}
      fluid
    >
      <Header />
      <Row>
        <Col sm={3}>
          <SideMenu />
        </Col>
        <Col sm={8}>{children}</Col>
      </Row>
    </Container>
  )
}

export default DashboardLayout
