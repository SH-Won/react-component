import { IconProps } from '../Element'
const ArrowLeft = (props: IconProps) => {
  const size =
    props.size === 'big' ? '30' : props.size === 'medium' ? '24' : '20'
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0" />

      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <g id="SVGRepo_iconCarrier">
        {' '}
        <path
          d="M4 12L20 12"
          stroke={props.color}
          strokeWidth="0.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />{' '}
        <path
          d="M10 6L4.0625 11.9375V11.9375C4.02798 11.972 4.02798 12.028 4.0625 12.0625V12.0625L10 18"
          stroke={props.color}
          strokeWidth="0.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />{' '}
      </g>
    </svg>
  )
}

export default ArrowLeft
