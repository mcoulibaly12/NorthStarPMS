import { useState } from 'react'

import { Container, Nav } from 'react-bootstrap'

import { Metadata } from '@redwoodjs/web'

import { CompanySection } from './components/CompanySection'
import { CriteriaSection } from './components/CriteriaSection'
import { CustomersSection } from './components/CustomersSection'

type SelectCallback = (eventKey: string | null) => void | null

const SettingsPage = () => {
  const [activeKey, setActiveKey] = useState('company')

  // This function changes the active section based on the link clicked
  const handleSelect: SelectCallback = (eventKey: string | null) => {
    if (eventKey) {
      setActiveKey(eventKey)
    }
  }

  // Function to render the appropriate section
  const renderSection = () => {
    switch (activeKey) {
      case 'company':
        return <CompanySection />
      case 'customers':
        return <CustomersSection />
      case 'criteria':
        return <CriteriaSection />
      default:
        return <CompanySection />
    }
  }

  return (
    <Container fluid>
      <Metadata title="Settings" description="Settings page" />

      {/* Settings menu options */}
      <Nav
        style={{ paddingBottom: '10px' }}
        className="justify-content-end"
        variant="pills"
        activeKey={activeKey}
        onSelect={handleSelect}
      >
        <Nav.Item>
          <Nav.Link eventKey="company">Company</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="customers">Customers</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="criteria">Criteria</Nav.Link>
        </Nav.Item>
      </Nav>

      {/* Dynamically displayed sections */}
      {renderSection()}
    </Container>
  )
}

export default SettingsPage
