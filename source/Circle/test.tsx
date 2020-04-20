import React from 'react'
import { render } from '@testing-library/react'
import axe from 'axe-core'
import Circle from './index'

test('with all props', () => {
  const { asFragment } = render(
    <Circle
      desc="A blue circle"
      fill="#30336b"
      size={200}
      title="Water planet"
    />
  )

  expect(asFragment()).toMatchSnapshot()
})

test('without desc & fill', () => {
  const { asFragment } = render(<Circle title="Water planet" size={200} />)

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
  const { container } = render(
    <Circle desc="A blue circle" title="Water circle" size={200} />
  )

  // do something very wrong to prove a11y testing
  container.querySelector('title')?.remove()

  axe.run(container, {}, (err, result) => {
    expect(err).toEqual(null)
    expect(result.violations[0].id).toEqual('svg-img-alt')
    done()
  })
})
