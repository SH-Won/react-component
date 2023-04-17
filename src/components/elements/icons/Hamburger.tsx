import { IconProps } from '../Element'

const Hamburger = (props: IconProps) => {
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
        <path fill="#D9D9D9" d="M0 0h30v30H0z" />
      </mask>
      <g mask="url(#a)">
        <path
          d="M6 20.25v-1.5h17.5v1.5H6Zm0-4.88v-1.5h17.5v1.5H6Zm0-4.87V9h17.5v1.5H6Z"
          fill={props.color}
        />
      </g>
    </svg>
  )
}

export default Hamburger
