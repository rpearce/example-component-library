import React, { FC } from 'react'
import { color, number, text } from '@storybook/addon-knobs'
import { Circle } from '../'
import '../../.storybook/base.css'
import '../../dist/css/Circle/styles.css'

export default {
  title: 'Circle',
  component: Circle,
}

export const WithKnobs: FC = () => (
  <Circle
    desc={text('desc', 'A blue circle')}
    fill={color('fill', '#7ed6df')}
    size={number('size', 200)}
    title={text('title', 'Abstract water planet')}
  />
)
