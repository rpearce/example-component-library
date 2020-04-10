import React, { FC } from 'react'

interface Props {
  sizeA: number
  sizeB: number
}

const Rectangle: FC<Props> = ({ sizeA, sizeB }) => {
  return (
    <svg className="rl-rect">
      <circle />
    </svg>
  )
}

export default Rectangle
