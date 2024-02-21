import { Container } from 'react-bootstrap'

import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const PlanningPage = () => {
  return (
    <Container>
      <Metadata title="Planning" description="Planning page" />

      <h1>PlanningPage</h1>
      <p>
        Find me in <code>./web/src/pages/PlanningPage/PlanningPage.tsx</code>
      </p>
      <p>
        My default route is named <code>planning</code>, link to me with `
        <Link to={routes.planning()}>Planning</Link>`
      </p>
    </Container>
  )
}

export default PlanningPage
