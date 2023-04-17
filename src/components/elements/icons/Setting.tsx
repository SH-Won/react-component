import { IconProps } from '../Element'

const Setting = (props: IconProps) => {
  const size =
    props.size === 'big' ? '30' : props.size === 'medium' ? '24' : '20'
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <rect
          width="48"
          height="48"
          fill={props.color}
          fillOpacity="0.01"
        ></rect>
        <path
          d="M41.5 10H35.5"
          stroke="#000000"
          strokeWidth="0.9600000000000002"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M27.5 6V14"
          stroke="#000000"
          strokeWidth="0.9600000000000002"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M27.5 10L5.5 10"
          stroke="#000000"
          strokeWidth="0.9600000000000002"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M13.5 24H5.5"
          stroke="#000000"
          strokeWidth="0.9600000000000002"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M21.5 20V28"
          stroke="#000000"
          strokeWidth="0.9600000000000002"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M43.5 24H21.5"
          stroke="#000000"
          strokeWidth="0.9600000000000002"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M41.5 38H35.5"
          stroke="#000000"
          strokeWidth="0.9600000000000002"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M27.5 34V42"
          stroke="#000000"
          strokeWidth="0.9600000000000002"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M27.5 38H5.5"
          stroke="#000000"
          strokeWidth="0.9600000000000002"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </g>
    </svg>
  )
}

export default Setting
