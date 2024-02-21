import { Button, Col, Row } from 'react-bootstrap'

import { Link } from '@redwoodjs/router'

export function SideMenu() {
  const buttons = [
    {
      text: 'Plan',
      path: '/planning',
    },
    {
      text: 'Build',
      path: '/build',
    },
    {
      text: 'Write',
      path: '/writing',
    },
    {
      text: 'Recover',
      path: '/recovery',
    },
    {
      text: 'Review',
      path: '/review',
    },
    {
      text: 'Evaluate',
      path: '/evaluation',
    },
    {
      text: 'Finalize',
      path: '/finalize',
    },
    {
      text: 'Submit',
      path: '/submission',
    },
    {
      text: 'Archive',
      path: '/archive',
    },
    {
      text: 'Post submission',
      path: '/post-submission',
    },
  ]

  return (
    <Col sm={6}>
      {buttons.map((button, index) => (
        <Row
          style={{ marginLeft: '10px', marginRight: '10px' }}
          key={button.text + index}
        >
          <Link to={button.path}>
            <Button
              style={{
                minWidth: '15vw',
                marginBottom: '10px',
                textAlign: 'center',
                whiteSpace: 'normal',
              }}
              variant="primary"
            >
              {button.text}
            </Button>
          </Link>
        </Row>
      ))}
    </Col>
  )
}
