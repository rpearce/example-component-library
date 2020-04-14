import React, { FC } from 'react'
import Circle from '../Circle'
import Rectangle from '../Rectangle'

const Rectangircle: FC = () => (
  <>
    <Circle
      className="rl-rectangircle__circle"
      desc="A blue circle"
      fill="#7ed6df"
      size={200}
      title="Water planet"
    />
    <Rectangle
      className="rl-rectangircle__rect"
      desc="A rectangle that is 4 times taller than it is wide"
      fill="#30336b"
      height={100}
      title="Minimalist building"
      width={400}
    />
  </>
)

export default Rectangircle
