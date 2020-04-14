import React, { FC } from 'react'

interface Props {
  desc?: string
  fill?: string
  height: number
  title?: string
  width: number
}

const Rectangle: FC<Props> = ({ desc, fill, height, title, width }) => (
  <svg
    className="rl-rect"
    fill={fill}
    height={height}
    role="img"
    viewBox={`0 0 ${width} ${height}`}
    width={width}
    xmlns="http://www.w3.org/2000/svg"
  >
    {title && <title>{title}</title>}
    {desc && <desc>{desc}</desc>}
    <rect width={width} height={height} />
  </svg>
)

Rectangle.defaultProps = {
  height: 100,
  width: 100,
}

export default Rectangle
