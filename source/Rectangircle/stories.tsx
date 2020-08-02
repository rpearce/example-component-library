import React, { FC } from 'react'
import { Rectangircle } from '../'
import '../../.storybook/base.css'
import '../../dist/css/Rectangircle/styles.css'

export default {
  title: 'Rectangircle',
  component: Rectangircle,
}

export const Default: FC = () => (<Rectangircle />)
