import { IconProps } from '../Element'

const Depth = (props: IconProps) => {
  const size =
    props.size === 'big' ? '30' : props.size === 'medium' ? '24' : '20'

  return (
    <svg
      data-v-1cb5ec28=""
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        data-v-1cb5ec28=""
        d="M1 30H.5v.5H1V30Zm15.35.35a.5.5 0 0 0 0-.7l-3.18-3.19a.5.5 0 1 0-.7.71L15.28 30l-2.83 2.83a.5.5 0 1 0 .71.7l3.18-3.18ZM.5 0v30h1V0h-1ZM1 30.5h15v-1H1v1Z"
        fill="#CFD4DD"
      ></path>
    </svg>
  )
}

export default Depth
