import React from 'react'
import { storiesOf } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import '../../.storybook/base.css'
import './styles.css'
import { Rectangircle } from '../../dist/esm'

const stories = storiesOf('Rectangircle', module)

stories.addDecorator(withA11y)

stories.add('default', () => <Rectangircle />)
