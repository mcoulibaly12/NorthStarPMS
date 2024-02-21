import { Container } from 'react-bootstrap'

import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const WritingPage = () => {
  return (
    <Container>
      <Metadata title="Writing" description="Writing page" />

      <h1>WritingPage</h1>
      <p>
        Find me in <code>./web/src/pages/WritingPage/WritingPage.tsx</code>
      </p>
      <p>
        My default route is named <code>writing</code>, link to me with `
        <Link to={routes.writing()}>Writing</Link>`
      </p>
    </Container>
  )
}

export default WritingPage
