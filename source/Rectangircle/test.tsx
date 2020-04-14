import React from 'react'
import { render } from '@testing-library/react'
import Rectangircle from './index'

test('with no props', () => {
  const { asFragment } = render(<Rectangircle />)

  expect(asFragment()).toMatchSnapshot()
})
