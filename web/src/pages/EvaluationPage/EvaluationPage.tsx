import { Container } from 'react-bootstrap'

import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const EvaluationPage = () => {
  return (
    <Container>
      <Metadata title="Evaluation" description="Evaluation page" />

      <h1>EvaluationPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/EvaluationPage/EvaluationPage.tsx</code>
      </p>
      <p>
        My default route is named <code>evaluation</code>, link to me with `
        <Link to={routes.evaluation()}>Evaluation</Link>`
      </p>
    </Container>
  )
}

export default EvaluationPage
