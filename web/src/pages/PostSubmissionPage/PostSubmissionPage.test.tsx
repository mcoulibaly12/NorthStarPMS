import { render } from '@redwoodjs/testing/web'

import PostSubmissionPage from './PostSubmissionPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('PostSubmissionPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PostSubmissionPage />)
    }).not.toThrow()
  })
})
