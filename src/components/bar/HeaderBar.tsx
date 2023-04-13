// import styles from './HeaderBar.module.scss';
import './HeaderBar.scss';

interface Props {
  isMobile? : boolean
  title? : string
}
const HeaderBar = (props :Props) => {

  const className = props.isMobile ? 'appBar mobile' : 'appBar'
  return (
    <div className={className}>
    <span>{ props.title }</span>
    <span>{props.isMobile}</span>
  </div>
  )
}

export default HeaderBar