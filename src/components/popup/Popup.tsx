import OverLay from '../../layout/OverLay'
import './Popup.scss'
interface Props {
  isOpen: boolean
  isMobile: boolean
  children?: string | JSX.Element | JSX.Element[]
}
const Popup = (props: Props) => {
  return (
    <OverLay isOpen={props.isOpen} opacity={0.6}>
      <div className={`wrapper ${props.isMobile ? 'mobile' : ''}`}>
        {props.children}
      </div>
    </OverLay>
  )
}
export default Popup
