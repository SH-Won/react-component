import Colors from '../../styles/colors.module.scss'
import Element from '../elements/Element'
import './styles/PopupHeader.scss'
interface Props {
  title?: string
  back?: () => void
  close?: () => void
  maxProgress?: number
  progress?: number
}

const PopupHeader = (props: Props) => {
  const isShowProgress = props.maxProgress !== 0 && props.maxProgress
  const style = props.title
    ? {
        padding: isShowProgress ? '20px 20px 9px' : '20px',
      }
    : {
        padding: isShowProgress ? '16px 16px 7px' : '16px',
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

      {isShowProgress && (
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
      )}
    </div>
  )
}

export default PopupHeader
