import React from 'react'

import { Navbar, Nav, Container } from 'react-bootstrap'
import {
  QuestionCircle,
  Search,
  Gear,
  BoxArrowLeft,
} from 'react-bootstrap-icons'

import { useAuth } from 'src/auth'

export function Header() {
  const { isAuthenticated, logOut } = useAuth()

  return (
    <Navbar expand="lg" className="justify-content-between">
      <Container fluid>
        <Navbar.Brand href="/dashboard">NorthStar PMS</Navbar.Brand>
        <Nav
          className="ml-auto"
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          {isAuthenticated ? (
            <>
              <Nav.Link href="help">
                {' '}
                <QuestionCircle style={{ marginBottom: '2px' }} /> Help{' '}
              </Nav.Link>
              <Nav.Link href="settings">
                {' '}
                <Search style={{ marginBottom: '2px' }} /> Search{' '}
              </Nav.Link>
              <Nav.Link href="settings">
                {' '}
                <Gear style={{ marginBottom: '2px' }} /> Settings{' '}
              </Nav.Link>{' '}
              <Nav.Item onClick={logOut}>
                {' '}
                <BoxArrowLeft style={{ marginBottom: '2px' }} /> Sign Out{' '}
              </Nav.Item>
            </>
          ) : (
            <>
              <Nav.Link href="login"> Login </Nav.Link>
              <Nav.Link href="signup"> Sign Up </Nav.Link>
            </>
          )}
        </Nav>
      </Container>
    </Navbar>
  )
}
