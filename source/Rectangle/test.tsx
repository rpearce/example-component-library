import React from 'react'
import { render } from '@testing-library/react'
import axe from 'axe-core'
import Rectangle from './index'

test('with all props', () => {
  const { asFragment, container, getByText } = render(
    <Rectangle
      className="class-override"
      desc="A rectangle that is 4 times taller than it is wide"
      height={600}
      title="Minimalist building"
      width={150}
    />
  )

  const svgEl = container.querySelector('svg')
  const titleEl = getByText('Minimalist building')
  const descEl = getByText('A rectangle that is 4 times taller than it is wide')

  expect(svgEl).toHaveAttribute('height', '600')
  expect(svgEl).toHaveAttribute('width', '150')
  expect(titleEl).toBeInTheDocument()
  expect(descEl).toBeInTheDocument()
  expect(asFragment()).toMatchSnapshot()
})

test('with only height, title, width', () => {
  const { asFragment, container, getByText } = render(
    <Rectangle height={600} title="Minimalist building" width={150} />
  )
  const svgEl = container.querySelector('svg')
  const titleEl = getByText('Minimalist building')
  const descEl = container.querySelector('desc')

  expect(svgEl).toHaveAttribute('height', '600')
  expect(svgEl).toHaveAttribute('width', '150')
  expect(titleEl).toBeInTheDocument()
  expect(descEl).not.toBeInTheDocument()
  expect(asFragment()).toMatchSnapshot()
})

test('is accessible with height, width, title, desc', (done) => {
  const { container } = render(
    <Rectangle
      desc="A rectangle that is 4 times taller than it is wide"
      height={600}
      title="Minimalist building"
      width={150}
    />
  )

  axe.run(container, {}, (err, result) => {
    expect(err).toEqual(null)
    expect(result.violations.length).toEqual(0)
    done()
  })
})

test('is inaccessible without title', (done) => {
  const { container } = render(
    <Rectangle
      desc="A rectangle that is 4 times taller than it is wide"
      height={600}
      title="Minimalist building"
      width={150}
    />
  )

  // do something very wrong to prove a11y testing
  container.querySelector('title')?.remove()

  axe.run(container, {}, (err, result) => {
    expect(err).toEqual(null)
    expect(result.violations[0].id).toEqual('svg-img-alt')
    done()
  })
})
