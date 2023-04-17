import { IconProps } from '../Element'

const Right = (props: IconProps) => {
  const size =
    props.size === 'big' ? '30' : props.size === 'medium' ? '24' : '20'
  return (
    <svg
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="a"
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width={size}
        height={size}
      >
        <path fill="#D9D9D9" d="M0 0h24v24H0z" />
      </mask>
      <g mask="url(#a)">
        <path
          d="M9.4 17.65 8.35 16.6l4.6-4.6-4.6-4.6L9.4 6.35 15.05 12 9.4 17.65Z"
          fill={props.color}
        />
      </g>
    </svg>
  )
}

export default Right
