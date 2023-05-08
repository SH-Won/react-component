import Colors from '../../styles/colors.module.scss'
import { Element } from '../elements'
import './HeaderBar.scss'

interface Props {
  isMobile?: boolean
  title?: string
  back: (() => void) | undefined
  children?: JSX.Element | JSX.Element[] | string
}
const HeaderBar = (props: Props) => {
  const isBackFunc = typeof props.back === 'function'

  const className = props.isMobile ? 'appBar mobile' : 'appBar'
  return (
    <div className={className}>
      {isBackFunc && (
        <div onClick={props.back}>
          <Element name="ArrowLeft" size="big" color={Colors.grey_111} />
        </div>
      )}
      <span>{props.title}</span>
      {props.children}
    </div>
  )
}

export default HeaderBar
