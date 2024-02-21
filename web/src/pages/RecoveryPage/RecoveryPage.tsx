import { Container } from 'react-bootstrap'

import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const RecoveryPage = () => {
  return (
    <Container>
      <Metadata title="Recovery" description="Recovery page" />

      <h1>RecoveryPage</h1>
      <p>
        Find me in <code>./web/src/pages/RecoveryPage/RecoveryPage.tsx</code>
      </p>
      <p>
        My default route is named <code>recovery</code>, link to me with `
        <Link to={routes.recovery()}>Recovery</Link>`
      </p>
    </Container>
  )
}

export default RecoveryPage
