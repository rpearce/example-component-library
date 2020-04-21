import React from 'react'
import { storiesOf } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import { color, number, text, withKnobs } from '@storybook/addon-knobs'
import { Circle } from '../../dist/esm'
import '../../.storybook/base.css'
import '../../dist/css/Circle/styles.css'

const stories = storiesOf('Circle', module)

stories.addDecorator(withA11y)
stories.addDecorator(withKnobs)

stories.add('default', () => (
  <Circle
    desc={text('desc', 'A blue circle')}
    fill={color('fill', '#7ed6df')}
    size={number('size', 200)}
    title={text('title', 'Abstract water planet')}
  />
))
