import { DOMElement, MutableRefObject, useEffect, useRef } from "react"

const useCloseEvent = (closeEvent : () => void) => {
  const ref = useRef<HTMLDivElement>(null)

  const onClick = (e : any) => {
    const isInner = ref.current?.contains(e.target)
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