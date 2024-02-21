import { render } from '@redwoodjs/testing/web'

import WritingPage from './WritingPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('WritingPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<WritingPage />)
    }).not.toThrow()
  })
})
