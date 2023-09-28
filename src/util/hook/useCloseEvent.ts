import { useEffect, useRef, useState } from 'react'

const useCloseEvent = (closeEvent : () => void) => {
  const ref = useRef<HTMLDivElement>(null)
  const [pathName,setPathName] = useState<string>(location.pathname)

  const onClick = (e : any) => {
    const isInner = ref.current?.contains(e.target)
    if(!isInner){
      closeEvent()
    }
    setPathName((prev) => {
      if (prev !== location.pathname) {
        closeEvent()
        return location.pathname
      }
      return prev
    })
  }
  useEffect(() => {
    window.addEventListener('click',onClick)
    return () => {
      window.removeEventListener('click',onClick)
    }
  },[])
  return {
    ref
  }
}
export {useCloseEvent}