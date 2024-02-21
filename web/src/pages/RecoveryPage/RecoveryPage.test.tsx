import { render } from '@redwoodjs/testing/web'

import RecoveryPage from './RecoveryPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('RecoveryPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<RecoveryPage />)
    }).not.toThrow()
  })
})
