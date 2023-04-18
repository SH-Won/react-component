import Colors from '../../styles/colors.module.scss'
import Element from '../elements/Element'
import './PopupHeader.scss'
interface Props {
  title?: string
  back?: () => void
  close?: () => void
}

const PopupHeader = (props: Props) => {
  const style = props.title
    ? {
        padding: '20px',
      }
    : {
        padding: '16px',
      }
  return (
    <div className="popup-header" style={style}>
      {props.back && (
        <div className="popup-icon" onClick={props.back}>
          <Element name="ArrowLeft" size="big" color={Colors.grey_999} />
        </div>
      )}
      {props.title && (
        <div>
          <span className="title">{props.title}</span>
        </div>
      )}
      {props.close && (
        <div className="popup-icon" onClick={props.close}>
          <Element name="Close" size="big" color={Colors.grey_999} />
        </div>
      )}
    </div>
  )
}

export default PopupHeader
