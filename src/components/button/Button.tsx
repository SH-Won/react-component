import Colors from '../../styles/colors.module.scss'
import './Button.scss'
interface Props {
  size?: string
  color: string
  children?: string | JSX.Element | JSX.Element[]
  disable?: boolean
  width?: string
  fontColor?: string
  border?: string
  click?: (() => void) | (() => Promise<void>)
}

const Button = (props: Props) => {
  const computedStyle = () => {
    if (props.disable) {
      return {
        backgroundColor: Colors.bg_disable,
        padding: props.size === 'big' ? '14px 24px' : '12px 20px',
        border: props.border ? `1px solid ${props.border}` : '',
        width: props.width,
        color: props.fontColor,
      }
    } else {
      return {
        backgroundColor: props.color,
        padding: props.size === 'big' ? '14px 24px' : '12px 20px',
        border: props.border ? `1px solid ${props.border}` : '',
        width: props.width,
        color: props.fontColor,
      }
    }
  }
  return (
    <div
      className="common-button"
      style={computedStyle()}
      onClick={props.click}
    >
      {props.children}
    </div>
  )
}

export default Button
