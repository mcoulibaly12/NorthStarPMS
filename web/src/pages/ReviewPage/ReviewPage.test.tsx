import { render } from '@redwoodjs/testing/web'

import ReviewPage from './ReviewPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ReviewPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ReviewPage />)
    }).not.toThrow()
  })
})
