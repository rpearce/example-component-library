import React from 'react'
import { render } from '@testing-library/react'
import Rect from './index'

test('it works', () => {
  const { asFragment } = render(<Rect width={10} height={20} />)
  expect(asFragment()).toMatchSnapshot()
})
