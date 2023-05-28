import { useCloseEvent } from '../../util/hook'
import React, {
  Children,
  cloneElement,
  useEffect,
  useRef,
  useState,
} from 'react'

import './DropDown.scss'

interface DropDownProps {
  selected: string
  children: any
}
const DropDown = ({ selected, children }: DropDownProps) => {
  const [open, setOpen] = useState(false)
  const { ref: dropdown } = useCloseEvent(() => setOpen(false))
  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(false)
    }, 150)
    return () => {
      clearTimeout(timer)
    }
  }, [selected])

  return (
    <div className="dropdown" ref={dropdown}>
      <div
        className="dropdown-selected"
        onClick={() => setOpen((prev) => !prev)}
      >
        {selected}
      </div>
      {cloneElement(children, { open, selected })}
    </div>
  )
}

export default DropDown
