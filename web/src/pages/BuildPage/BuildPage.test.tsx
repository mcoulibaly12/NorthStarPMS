import { render } from '@redwoodjs/testing/web'

import BuildPage from './BuildPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('BuildPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BuildPage />)
    }).not.toThrow()
  })
})
