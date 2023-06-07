import { useCloseEvent } from '@/util'
import { useState } from 'react'
import { HeaderBar } from '../bar'
import { Element } from '../elements'
import Colors from '../../styles/colors.module.scss'
import './styles/Navigation.scss'

interface NavigationProps {
  screen: 'desktop' | 'tablet' | 'mobile'
  children: JSX.Element | JSX.Element[] | string
}
const Navigation = (props: NavigationProps) => {
  const { ref: navigation } = useCloseEvent(() => setOpen(false))
  const [open, setOpen] = useState<boolean>(false)
  const openDrawer = () => {
    setOpen((prev) => !prev)
  }
  return (
    <>
      <div className="navigation" ref={navigation}>
        <HeaderBar
          back={() => {}}
          title="Navigation"
          isMobile={props.screen === 'mobile'}
          openDrawer={() => openDrawer()}
        >
          {props.children}
        </HeaderBar>
        <div className={`navigation-drawer ${open ? 'show' : ''}`}>
          <div
            className="navigation-drawer-close"
            onClick={() => setOpen(false)}
          >
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
