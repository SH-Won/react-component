import { lazy, Suspense } from "react"
import Adult from "./icons/Adult"
import ArrowLeft from "./icons/ArrowLeft"
import Close from "./icons/Close"

export interface IconProps {
  size : 'big' | 'medium' | 'small' | 'custom'
  color : string
}
interface ElementProps extends IconProps{
  name : string
}
const Element = (props : ElementProps) => {
  
  // const iconComponent = async () => {
  //   const component = import.meta.glob('./icons/*.tsx')
  //   const entries = Object.entries(component)
  //   const findComponent = entries.find(([fileName]) => {
  //     const findName = './icons/' + props.name + '.tsx'
  //     return fileName === findName
  //   })
  //   if(!findComponent) throw new Error('cannot find component' + props.name)
    
  //   // return (await findComponent[1]().then((component) => {
  //   //   return component
  //   // }))
  //   return (await findComponent[1]())
  // }
  // const Icon = () =>{
  //   const component = lazy(() => import(`./icons/${props.name}.tsx`).then(component => ({default :component})))
  //   return component
  // }
  // const Icon = lazy(() => {
  //      const component = import.meta.glob('./icons/*.tsx')
  //   const entries = Object.entries(component)
  //   const findComponent = entries.find(([fileName]) => {
  //     const findName = './icons/' + props.name + '.tsx'
  //     return fileName === findName
  //   })
  //   if(!findComponent) throw new Error('cannot find component' + props.name)
  //   return findComponent[1]
  // })

  const renderComponent = ( ) => {
    switch(props.name){
      case 'ArrowLeft' : 
       return <ArrowLeft {...props}/>
      case 'Close' : 
       return <Close {...props} />
      case 'Adult' : 
       return <Adult {...props} />
      default : return null
    }
  }

  const adjustHeight = () => {
    if (props.size === 'big') return '30px'
    else if (props.size === 'medium') return '24px'
    else return '20px'
  }

  // 이거 Suspense 가 계속 일어나서 렌더링에 문제가 있음 다른 방법을 찾아야함
  const Icon = lazy(() => import(`./icons/${props.name}.tsx`))
  

  return (
    <Suspense fallback={null}>
      <div style={{height : adjustHeight() , display :'inline-block'}}>
        {/* <Icon {...props}/> */}
        {renderComponent()}
      </div>
    </Suspense>
  )
}

export default Element