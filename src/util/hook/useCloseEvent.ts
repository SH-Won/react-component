import { useEffect, useRef } from "react"

const useCloseEvent = (closeEvent : () => void) => {
  const ref = useRef<HTMLDivElement>(null)

  const onClick = (e : any) => {
    const isInner = ref.current?.contains(e.target)
    console.log(ref.current, e.target)
    console.dir(e.target)
    console.log(isInner, e.target)
    if(!isInner){
      closeEvent()
    }
  }
  useEffect(() => {
    window.addEventListener('click', onClick)
    return () => {
      window.removeEventListener('click',onClick)
    }
  },[])
  return {
    ref
  }
}
export {useCloseEvent}