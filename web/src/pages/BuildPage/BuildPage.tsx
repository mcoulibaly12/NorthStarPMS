import { Container } from 'react-bootstrap'

import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const BuildPage = () => {
  return (
    <Container>
      <Metadata title="Build" description="Build page" />

      <h1>BuildPage</h1>
      <p>
        Find me in <code>./web/src/pages/BuildPage/BuildPage.tsx</code>
      </p>
      <p>
        My default route is named <code>build</code>, link to me with `
        <Link to={routes.build()}>Build</Link>`
      </p>
    </Container>
  )
}

export default BuildPage
