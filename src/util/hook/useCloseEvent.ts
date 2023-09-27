import { useEffect, useRef } from 'react'

const useCloseEvent = (closeEvent : () => void) => {
  const ref = useRef<HTMLDivElement>(null)

  const onClick = (e : any) => {
    const isInner = ref.current?.contains(e.target)
    if(!isInner || (isInner && e.target !== ref.current)){
      closeEvent()
    }
  }
  useEffect(() => {
    window.addEventListener('click',onClick, true)
    return () => {
      window.removeEventListener('click',onClick, true)
    }
  },[])
  return {
    ref
  }
}
export {useCloseEvent}