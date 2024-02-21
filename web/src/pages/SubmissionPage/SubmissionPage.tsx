import { Container } from 'react-bootstrap'

import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const SubmissionPage = () => {
  return (
    <Container>
      <Metadata title="Submission" description="Submission page" />

      <h1>SubmissionPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/SubmissionPage/SubmissionPage.tsx</code>
      </p>
      <p>
        My default route is named <code>submission</code>, link to me with `
        <Link to={routes.submission()}>Submission</Link>`
      </p>
    </Container>
  )
}

export default SubmissionPage
