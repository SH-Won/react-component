import { IconProps } from '../Element'

const Caution = (props: IconProps) => {
  const size =
    props.size === 'big' ? '30' : props.size === 'medium' ? '24' : '20'

  return (
    <svg
      id="caution-sign-circle"
      fill="#999999"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className="icon line"
      stroke={props.color}
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
        <line
          id="primary-upstroke"
          x1="11.95"
          y1="16.5"
          x2="12.05"
          y2="16.5"
          style={{
            fill: 'none',
            stroke: '#000000',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: 1.95,
          }}
        ></line>
        <path
          id="primary"
          d="M3,12a9,9,0,0,1,9-9h0a9,9,0,0,1,9,9h0a9,9,0,0,1-9,9h0a9,9,0,0,1-9-9Zm9,0V7"
          style={{
            fill: 'none',
            stroke: '#000000',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: 1.5,
          }}
        ></path>
      </g>
    </svg>
  )
}

export default Caution
