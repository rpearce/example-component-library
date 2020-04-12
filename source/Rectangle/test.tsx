import React from 'react'
import { render } from '@testing-library/react'
import axe from 'axe-core'
import Rect from './index'

test('with all props', () => {
  const { asFragment } = render(
    <Rect
      desc="A rectangle that is 4 times taller than it is wide"
      height={600}
      title="Minimalist building"
      width={150}
    />
  )

  expect(asFragment()).toMatchSnapshot()
})

test('without title & desc', () => {
  const { asFragment } = render(<Rect height={600} width={150} />)

  expect(asFragment()).toMatchSnapshot()
})

test('is accessible with all props', (done) => {
  const { container } = render(
    <Rect
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
    <Rect
      desc="A rectangle that is 4 times taller than it is wide"
      height={600}
      width={150}
    />
  )

  axe.run(container, {}, (err, result) => {
    expect(err).toEqual(null)
    expect(result.violations[0].id).toEqual('svg-img-alt')
    done()
  })
})
