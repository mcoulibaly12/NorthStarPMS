import { Container } from 'react-bootstrap'

import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const ArchivePage = () => {
  return (
    <Container>
      <Metadata title="Archive" description="Archive page" />

      <h1>ArchivePage</h1>
      <p>
        Find me in <code>./web/src/pages/ArchivePage/ArchivePage.tsx</code>
      </p>
      <p>
        My default route is named <code>archive</code>, link to me with `
        <Link to={routes.archive()}>Archive</Link>`
      </p>
    </Container>
  )
}

export default ArchivePage
