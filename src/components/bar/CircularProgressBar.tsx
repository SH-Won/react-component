import Colors from '../../styles/colors.module.scss'
import './CircularProgressBar.scss'
interface CircularProgressBarProps {
  size: number
  percent: number
  transitionEffect?: boolean
}
const CircularProgressBar = (props: CircularProgressBarProps) => {
  const borderSize = props.size / 14
  const containerStyle = {
    width: props.size + 'px',
    height: props.size + 'px',
    borderRadius: props.size + borderSize / 1.5 + 'px',
    padding: borderSize / 1.5 + 'px',
  }
  const progressBarStyle = {
    borderRadius: props.size + 'px',
  }
  const leftTrans = props.percent >= 50 ? (18 * (props.percent - 50)) / 5 : 0
  const rightTrans = props.percent <= 50 ? 18 * (props.percent / 5) : 180
  const borderColor =
    props.percent < 50
      ? Colors.red
      : props.percent < 75
      ? Colors.orange
      : Colors.green

  const leftStyle = {
    border: `${borderSize}px solid ${borderColor}`,
    borderTopRightRadius: props.size + 'px',
    borderBottomRightRadius: props.size + 'px',
    transform: `rotate(${leftTrans}deg)`,
  }
  const rightStyle = {
    border: `${borderSize}px solid ${borderColor}`,
    borderTopLeftRadius: props.size + 'px',
    borderBottomLeftRadius: props.size + 'px',
    transform: `rotate(${rightTrans}deg)`,
  }
  const percentStyle = {
    fontSize: props.size / 4 + 'px',
    borderRadius: props.size - borderSize * 2 + 'px',
    width: props.size - borderSize * 2 + 'px',
    height: props.size - borderSize * 2 + 'px',
  }

  return (
    <div className="container" style={containerStyle}>
      <div className="circular-progress-bar" style={progressBarStyle}>
        <span className="left">
          <span className="bar" style={leftStyle}></span>
        </span>
        <span className="right">
          <span className="bar" style={rightStyle}></span>
        </span>
        <div className="percent" style={percentStyle}>
          {props.percent}%
        </div>
      </div>
    </div>
  )
}

export default CircularProgressBar
