import React from 'react'

import { Navbar, Nav, Container } from 'react-bootstrap'
import { QuestionCircle, Search, Gear } from 'react-bootstrap-icons'

export function Header() {
  return (
    <Navbar
      expand="lg"
      className="justify-content-between"
      style={{ width: '100vw' }}
    >
      <Container fluid>
        <Navbar.Brand href="/dashboard">NorthStar PMS</Navbar.Brand>
        <Nav className="ml-auto">
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
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}
