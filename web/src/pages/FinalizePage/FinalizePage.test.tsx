import { render } from '@redwoodjs/testing/web'

import FinalizePage from './FinalizePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('FinalizePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FinalizePage />)
    }).not.toThrow()
  })
})
