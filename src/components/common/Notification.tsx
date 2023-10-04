import Colors from '@/styles/colors.module.scss'
import { Element } from '../elements'
import './styles/Notification.scss'
interface NotifiCationProps {
  children?: JSX.Element | JSX.Element[] | string
  text?: string
  title?: string
  height?: string
  color?: string
}
const NotifiCation = (props: NotifiCationProps) => {
  const color = props.color ?? Colors.white
  return (
    <div className="notification">
      {props.children}
      <div className="info" style={{ height: props.height, color }}>
        <Element name="Caution" size="small" color={Colors.grey_bbb} />
        <span>{props.text}</span>
      </div>
    </div>
  )
}

export default NotifiCation
