import Colors from '../../styles/colors.module.scss'
import Element from '../elements/Element'
import './PopupHeader.scss'
interface Props {
  title?: string
  back?: () => void
  close?: () => void
  maxProgress?: number
  progress?: number
}

const PopupHeader = (props: Props) => {
  const style = props.title
    ? {
        padding: '20px 20px 9px',
      }
    : {
        padding: '16px 16px 7px',
      }
  return (
    <div className="popup-header-container" style={style}>
      <div className="popup-header">
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
      <div className="popup-header-progress">
        {Array(props.maxProgress)
          .fill(1)
          .map((v, i) => (
            <span
              key={`progress${i}`}
              className={`${i + v === props.progress ? 'selected' : ''}`}
            ></span>
          ))}
      </div>
    </div>
  )
}

export default PopupHeader
