import React from 'react'
import { render } from '@testing-library/react'
import axe from 'axe-core'
import Circle from './index'

test('with all props', () => {
  const { asFragment } = render(
    <Circle desc="A blue circle" size={200} title="Water planet" />
  )

  expect(asFragment()).toMatchSnapshot()
})

test('without title & desc', () => {
  const { asFragment } = render(<Circle size={200} />)

  expect(asFragment()).toMatchSnapshot()
})

test('is accessible with all props', (done) => {
  const { container } = render(
    <Circle desc="A blue circle" size={200} title="Water planet" />
  )

  axe.run(container, {}, (err, result) => {
    expect(err).toEqual(null)
    expect(result.violations.length).toEqual(0)
    done()
  })
})

test('is inaccessible without title', (done) => {
  const { container } = render(<Circle desc="A blue circle" size={200} />)

  axe.run(container, {}, (err, result) => {
    expect(err).toEqual(null)
    expect(result.violations[0].id).toEqual('svg-img-alt')
    done()
  })
})
