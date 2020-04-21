import React from 'react'
import { render } from '@testing-library/react'
import axe from 'axe-core'
import Circle from './index'

test('with all props', () => {
  const { asFragment, container, getByText } = render(
    <Circle
      className="class-override"
      desc="A blue circle"
      fill="#30336b"
      size={200}
      title="Water planet"
    />
  )
  const svgEl = container.querySelector('svg')
  const titleEl = getByText('Water planet')
  const descEl = getByText('A blue circle')

  expect(svgEl).toHaveAttribute('height', '200')
  expect(svgEl).toHaveAttribute('width', '200')
  expect(titleEl).toBeInTheDocument()
  expect(descEl).toBeInTheDocument()
  expect(asFragment()).toMatchSnapshot()
})

test('with only title & size', () => {
  const { asFragment, container, getByText } = render(
    <Circle title="Water planet" size={200} />
  )
  const svgEl = container.querySelector('svg')
  const titleEl = getByText('Water planet')
  const descEl = container.querySelector('desc')

  expect(svgEl).toHaveAttribute('height', '200')
  expect(svgEl).toHaveAttribute('width', '200')
  expect(titleEl).toBeInTheDocument()
  expect(descEl).not.toBeInTheDocument()
  expect(asFragment()).toMatchSnapshot()
})

test('is accessible with title, desc, size', (done) => {
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
