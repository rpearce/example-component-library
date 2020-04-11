import React, { FC } from 'react'

interface Props {
  size: number
}

const Circle: FC<Props> = ({ size }) => (
  <svg
    className="rl-circle"
    height={size}
    viewBox="0 0 100 100"
    width={size}
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="50" cy="50" r="50" />
  </svg>
)

export default Circle
