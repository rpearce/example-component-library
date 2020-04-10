import React from 'react'
import { render } from '@testing-library/react'
import Circle from './index'

test('it works', () => {
  const { asFragment } = render(<Circle size={20} />)
  expect(asFragment()).toMatchSnapshot()
})
