import React from 'react'
import { IconProps } from '../Element'

const Login = (props: IconProps) => {
  const size =
    props.size === 'big' ? '30' : props.size === 'medium' ? '24' : '20'

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={props.color}
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0" />

      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <g id="SVGRepo_iconCarrier">
        {' '}
        <path d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4" />{' '}
        <polyline points="10 17 15 12 10 7" />{' '}
        <line x1="15" y1="12" x2="3" y2="12" />{' '}
      </g>
    </svg>
  )
}

export default Login
