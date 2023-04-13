import React from 'react'
import './OverLay.scss'
interface Props {
  isOpen : boolean
  opacity : number
  children? : string | JSX.Element | JSX.Element[] 
}
const OverLay = (props : Props) => {
  const style = {
    backgroundColor: `rgba(0,0,0,${props.opacity})`,
  }
  return (
    <React.Fragment>
      {props.isOpen &&
       <div className="overlay" style={style}>
         {props.children}
       </div>
      }
    </React.Fragment>
  )
}

export default OverLay