import React from 'react'
import { storiesOf } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import { Rectangircle } from '../../dist/esm'
import '../../.storybook/base.css'
import '../../dist/css/Rectangircle/styles.css'

const stories = storiesOf('Rectangircle', module)

stories.addDecorator(withA11y)

stories.add('default', () => <Rectangircle />)
