import React, { FC } from 'react'

interface Props {
  size: number
}

const Circle: FC<Props> = ({ size }) => {
  return (
    <svg className="rl-circle">
      <circle />
    </svg>
  )
}

export default Circle
