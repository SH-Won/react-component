import Colors from '../../styles/colors.module.scss'
import { Element } from '../elements'
import './styles/HeaderBar.scss'

interface Props {
  isMobile?: boolean
  title?: string
  back: ((isMain: boolean) => void) | undefined
  children?: JSX.Element | JSX.Element[] | string
}
const HeaderBar = (props: Props) => {
  const isBackFunc = typeof props.back === 'function'
  const className = props.isMobile ? 'appBar mobile' : 'appBar'
  return (
    <div className={className}>
      <div className="logo">
        {isBackFunc && (
          <div onClick={() => props.back?.(false)} className="logo-icon">
            <Element name="ArrowLeft" size="big" color={Colors.grey_111} />
          </div>
        )}
        <span onClick={() => props.back?.(true)}>{props.title}</span>
      </div>
      {props.children}
    </div>
  )
}

export default HeaderBar
