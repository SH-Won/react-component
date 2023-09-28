import { useCloseEvent } from '../../util/hook'
import { useState } from 'react'
import { HeaderBar } from '../bar'
import { Element } from '../elements'
import Colors from '../../styles/colors.module.scss'
import './styles/Navigation.scss'

interface NavigationProps {
  isMobile: boolean
  title?: string
  iconColor?: string
  backgroundColor?: string
  back: ((isMain: boolean) => void) | undefined
  children?: JSX.Element | JSX.Element[] | string
  fixed?: boolean
}
const Navigation = (props: NavigationProps) => {
  const { ref: navigation } = useCloseEvent(() => closeFunc())
  const [open, setOpen] = useState<boolean>(false)
  const openDrawer = () => {
    setOpen((prev) => !prev)
    const body = document.querySelector('body')
    if (!open) {
      body!.style.overflow = 'hidden'
    }
  }
  const closeFunc = () => {
    setOpen((prev) => {
      if (prev) {
        const body = document.querySelector('body')
        body!.style.overflow = 'auto'
      }
      return false
    })
  }
  const style = {
    color: props.iconColor ?? Colors.grey_111,
    backgroundColor: props.backgroundColor ?? Colors.white,
  }

  return (
    <>
      <div
        className={`navigation ${props.fixed ? 'fixed' : ''}`}
        style={style}
        ref={navigation}
      >
        <HeaderBar {...props} openDrawer={openDrawer}>
          {props.children}
        </HeaderBar>
        <div className={`navigation-drawer ${open ? 'show' : ''}`}>
          <div className="navigation-drawer-close" onClick={closeFunc}>
            <Element
              name="Close"
              size="big"
              color={props.iconColor ?? Colors.grey_111}
            />
          </div>
          <div className="navigation-drawer-items">{props.children}</div>
        </div>
        {open && <div onClick={closeFunc} className="navigation-overlay"></div>}
      </div>
      {/* {open && <div className="navigation-overlay"></div>} */}
    </>
  )
}

export default Navigation
