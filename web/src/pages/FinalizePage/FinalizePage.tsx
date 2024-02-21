import { Container } from 'react-bootstrap'

import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const FinalizePage = () => {
  return (
    <Container>
      <Metadata title="Finalize" description="Finalize page" />

      <h1>FinalizePage</h1>
      <p>
        Find me in <code>./web/src/pages/FinalizePage/FinalizePage.tsx</code>
      </p>
      <p>
        My default route is named <code>finalize</code>, link to me with `
        <Link to={routes.finalize()}>Finalize</Link>`
      </p>
    </Container>
  )
}

export default FinalizePage
