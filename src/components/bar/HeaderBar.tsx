import Colors from '../../styles/colors.module.scss'
import { Element } from '../elements'
import './styles/HeaderBar.scss'

interface Props {
  isMobile?: boolean
  backgroundColor?: string
  iconColor?: string
  title?: string
  back: ((isMain: boolean) => void) | undefined
  children?: JSX.Element | JSX.Element[] | string
  openDrawer?: () => void
}
const HeaderBar = (props: Props) => {
  const isOpenDrawerFunc = typeof props.openDrawer === 'function'
  const isBackFunc = typeof props.back === 'function'
  const className = props.isMobile ? 'appBar mobile' : 'appBar'
  return (
    <div className={className}>
      {props.isMobile && isOpenDrawerFunc && (
        <div className="hamburger" onClick={props.openDrawer}>
          <Element
            name="Hamburger"
            size="big"
            color={props.iconColor ?? Colors.grey_111}
          />
        </div>
      )}
      <div className="logo">
        {isBackFunc && !props.isMobile && (
          <div onClick={() => props.back?.(false)} className="logo-icon">
            <Element
              name="ArrowLeft"
              size="big"
              color={props.iconColor ?? Colors.grey_111}
            />
          </div>
        )}
        <span onClick={() => props.back?.(true)}>{props.title}</span>
      </div>
      {props.children}
    </div>
  )
}

export default HeaderBar
