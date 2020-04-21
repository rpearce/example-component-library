import React from 'react'
import { storiesOf } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import { color, number, text, withKnobs } from '@storybook/addon-knobs'
import { Rectangle } from '../../dist/esm'
import '../../.storybook/base.css'
import '../../dist/css/Rectangle/styles.css'

const stories = storiesOf('Rectangle', module)

stories.addDecorator(withA11y)
stories.addDecorator(withKnobs)

stories.add('default', () => (
  <Rectangle
    desc={text('desc', 'A rectangle that is 4 times wider than it is tall')}
    fill={color('fill', '#30336b')}
    height={number('height', 100)}
    width={number('width', 400)}
    title={text('title', 'Minimalist fallen structure')}
  />
))
