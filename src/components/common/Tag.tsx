import './styles/Tag.scss'
import Colors from '../../styles/colors.module.scss'
interface TagProps {
  type?: 'normal' | 'ridi'
  size: 'small' | 'medium' | 'big' | 'custom'
  backgroundColor?: string
  fontColor?: string
  borderRadius?: string
  text: string
}
const Tag = ({
  backgroundColor,
  fontColor,
  text,
  size,
  borderRadius,
}: TagProps) => {
  const style = {
    backgroundColor: backgroundColor ?? Colors.white,
    color: fontColor ?? Colors.grey_111,
    borderRadius: borderRadius ?? '50px',
  }
  return (
    <span className={`tag ${size}`} style={style}>
      {text}
    </span>
  )
}

export default Tag
