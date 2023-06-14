import Colors from '../../styles/colors.module.scss'
import { OverLay } from '../../layout'
import { useCloseEvent } from '../../util'
import './styles/PopupDrawer.scss'
interface PopupDrawerProps {
  isOpen: boolean
  children?: JSX.Element | JSX.Element[] | string
  close?: () => void
  type: 'left' | 'right'
  backgroundColor?: string
  fontColor?: string
}

const PopupDrawer = (props: PopupDrawerProps) => {
  const { ref: drawer } = useCloseEvent(props.close!)
  const style = {
    backgroundColor: props.backgroundColor ?? Colors.bg_black,
    color: props.fontColor ?? Colors.white,
  }
  return (
    <>
      <div
        ref={drawer}
        className={`popup-drawer ${props.type} ${props.isOpen ? 'show' : ''}`}
        style={style}
      >
        {props.children}
      </div>
      <OverLay opacity={0.5} isOpen={props.isOpen} />
    </>
  )
}

export default PopupDrawer
