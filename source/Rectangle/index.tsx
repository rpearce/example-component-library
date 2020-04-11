import React, { FC } from 'react'

interface Props {
  height: number
  width: number
}

const Rectangle: FC<Props> = ({ height, width }) => (
  <svg
    className="rl-rect"
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    width={width}
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width={width} height={height} />
  </svg>
)

Rectangle.defaultProps = {
  height: 100,
  width: 100,
}

export default Rectangle
