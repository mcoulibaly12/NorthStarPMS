import { Container } from 'react-bootstrap'

import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const PostSubmissionPage = () => {
  return (
    <Container>
      <Metadata title="PostSubmission" description="PostSubmission page" />

      <h1>PostSubmissionPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/PostSubmissionPage/PostSubmissionPage.tsx</code>
      </p>
      <p>
        My default route is named <code>postSubmission</code>, link to me with `
        <Link to={routes.postSubmission()}>PostSubmission</Link>`
      </p>
    </Container>
  )
}

export default PostSubmissionPage
