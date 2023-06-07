import { useCloseEvent } from '../../util/hook'
import { useState } from 'react'
import { HeaderBar } from '../bar'
import { Element } from '../elements'
import Colors from '../../styles/colors.module.scss'
import './styles/Navigation.scss'

interface NavigationProps {
  isMobile: boolean
  title?: string
  back: ((isMain: boolean) => void) | undefined
  children?: JSX.Element | JSX.Element[] | string
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
    setOpen(false)
    const body = document.querySelector('body')
    body!.style.overflow = 'unset'
  }

  return (
    <>
      <div className="navigation" ref={navigation}>
        <HeaderBar {...props} openDrawer={openDrawer}>
          {props.children}
        </HeaderBar>
        <div className={`navigation-drawer ${open ? 'show' : ''}`}>
          <div className="navigation-drawer-close" onClick={closeFunc}>
            <Element name="Close" size="big" color={Colors.grey_111} />
          </div>
          <div className="navigation-drawer-items">{props.children}</div>
        </div>
      </div>
      {open && <div className="navigation-overlay"></div>}
    </>
  )
}

export default Navigation
