import { Container } from 'react-bootstrap'

import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const ReviewPage = () => {
  return (
    <Container>
      <Metadata title="Review" description="Review page" />

      <h1>ReviewPage</h1>
      <p>
        Find me in <code>./web/src/pages/ReviewPage/ReviewPage.tsx</code>
      </p>
      <p>
        My default route is named <code>review</code>, link to me with `
        <Link to={routes.review()}>Review</Link>`
      </p>
    </Container>
  )
}

export default ReviewPage
