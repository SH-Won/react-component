import React from 'react'
import { IconProps } from '../Element'

const Signup = (props: IconProps) => {
  const size =
    props.size === 'big' ? '30' : props.size === 'medium' ? '24' : '20'

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="#000000"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0" />
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g id="SVGRepo_iconCarrier">
        <title>i</title>
        <g id="Complete">
          <g id="user-add">
            <g>
              <path
                d="M17,21V19a4,4,0,0,0-4-4H5a4,4,0,0,0-4,4v2"
                fill="none"
                stroke={props.color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
              />
              <circle
                cx="9"
                cy="7"
                r="4"
                fill="none"
                stroke={props.color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
              />
              <line
                x1="17"
                y1="11"
                x2="23"
                y2="11"
                fill="none"
                stroke={props.color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
              />
              <line
                x1="20"
                y1="8"
                x2="20"
                y2="14"
                fill="none"
                stroke={props.color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  )
}

export default Signup
