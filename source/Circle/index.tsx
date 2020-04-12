import React, { FC } from 'react'

interface Props {
  desc?: string
  size: number
  title?: string
}

const Circle: FC<Props> = ({ desc, size, title }) => (
  <svg
    className="rl-circle"
    height={size}
    role="img"
    viewBox="0 0 100 100"
    width={size}
    xmlns="http://www.w3.org/2000/svg"
  >
    {title && <title>{title}</title>}
    {desc && <desc>{desc}</desc>}
    <circle cx="50" cy="50" r="50" />
  </svg>
)

export default Circle
