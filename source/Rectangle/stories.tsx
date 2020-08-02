import React, { FC } from 'react'
import { color, number, text } from '@storybook/addon-knobs'
import { Rectangle } from '../'
import '../../.storybook/base.css'
import '../../dist/css/Rectangle/styles.css'

export default {
  title: 'Rectangle',
  component: Rectangle,
}

export const WithKnobs: FC = () => (
  <Rectangle
    desc={text('desc', 'A rectangle that is 4 times wider than it is tall')}
    fill={color('fill', '#30336b')}
    height={number('height', 100)}
    width={number('width', 400)}
    title={text('title', 'Minimalist fallen structure')}
  />
)
