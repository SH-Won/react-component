import { IconProps } from '../Element'

const Close = (props : IconProps) => {
  const size = props.size === 'big' ? '30' : props.size === 'medium' ? '24' : '20'
  return (
    <svg width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.657 7.757a1 1 0 0 0-1.414-1.414L12 10.586 7.757 6.343a1 1 0 1 0-1.414 1.414L10.586 12l-4.243 4.243a1 1 0 1 0 1.414 1.414L12 13.414l4.243 4.243a1 1 0 0 0 1.414-1.414L13.414 12l4.243-4.243Z"
      fill={props.color}
    />
  </svg>
  )
}

export default Close