import { IconProps } from "../Element"
const ArrowLeft = (props : IconProps) => {
  const size = props.size === 'big' ? '30' : props.size === 'medium' ? '24' : '20'
  return (
    <svg
    width={size}
    height={size}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <mask
      id="a"
      style={{maskType: "alpha"}}
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width={size}
      height={size}
    >
      <path fill={"#D9D9D9"} d={"M0 0h30v30H0z"} />
    </mask>
    <g mask="url(#a)">
      <path
        d="M15 23.53 6.47 15 15 6.47l1.16 1.19-6.57 6.53h13.94v1.62H9.6l6.57 6.53-1.16 1.2Z"
        fill={props.color}
      />
    </g>
  </svg>
  )
}

export default ArrowLeft